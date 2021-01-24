import json
import logging
import os
import boto3
from botocore.exceptions import ClientError

logger = logging.getLogger()
logger.setLevel(logging.INFO)


def handle_connect(game_id, table, connection_id, player):
    
    player_dict = {
        'player': player,
        'cid': connection_id
    }
    logger.info("before try")
    try:
        # need to see if player exists already, if so then i gota only update the conn id
        table.update_item(
            Key={'game_id': game_id},
            UpdateExpression="SET players = list_append(players, :p)",
            ExpressionAttributeValues={
                ':p': [player_dict],
                },  
        ReturnValues="UPDATED_NEW"
        )
        logger.info(
            "Added connection %s for user %s.", connection_id, player)
        status_code = 200
    except ClientError:
        logger.exception(
            "Couldn't add connection %s for user %s.", connection_id, player)
        status_code = 503
    return status_code


# def handle_disconnect(table, connection_id):
#     """
#     Handles disconnections by removing the connection record from the DynamoDB table.

#     :param table: The DynamoDB connection table.
#     :param connection_id: The websocket connection ID of the connection to remove.
#     :return: An HTTP status code that indicates the result of removing the connection
#              from the DynamoDB table.
#     """
#     status_code = 200
#     try:
#         table.delete_item(Key={'connection_id': connection_id})
#         logger.info("Disconnected connection %s.", connection_id)
#     except ClientError:
#         logger.exception("Couldn't disconnect connection %s.", connection_id)
#         status_code = 503
#     return status_code


def handle_message(table, game_id, event_body, apig_management_client):
    status_code = 200
    try:
        game = table.get_item(Key={'game_id': game_id})['Item']
        logger.info(game)
        players = game['players']
        logger.info("Got game %s.", game_id)
    except ClientError:
        logger.exception("Couldn't find user name. Using %s.", game_id)

    connection_ids = []
    try:
        connection_ids = [item['cid'] for item in players]
        logger.info("Found %s active connections.", len(connection_ids))
    except ClientError:
        logger.exception("Couldn't get connections.")
        status_code = 404

    message = f"{game_id}: {event_body['msg']}".encode('utf-8')
    logger.info("Message: %s", message)

    for other_conn_id in connection_ids:
        try:
            send_response = apig_management_client.post_to_connection(
                Data=message, ConnectionId=other_conn_id)
            logger.info(
                "Posted message to connection %s, got response %s.",
                other_conn_id, send_response)
        except ClientError:
            logger.exception("Couldn't post to connection %s.", other_conn_id)
        # except apig_management_client.exceptions.GoneException:
        #     logger.info("Connection %s is gone, removing.", other_conn_id)
        #     try:
        #         table.delete_item(Key={'connection_id': other_conn_id})
        #     except ClientError:
        #         logger.exception("Couldn't remove connection %s.", other_conn_id)

    return status_code


def lambda_handler(event, context):
    """
    An AWS Lambda handler that receives events from an API Gateway websocket API
    and dispatches them to various handler functions.

    This function looks up the name of a DynamoDB table in the `table_name` environment
    variable. The table must have a primary key named `connection_id`.

    This function handles three routes: $connect, $disconnect, and sendmessage. Any
    other route results in a 404 status code.

    The $connect route accepts a query string `name` parameter that is the name of
    the user that originated the connection. This name is added to all chat messages
    sent by that user.

    :param event: A dict that contains request data, query string parameters, and
                  other data sent by API Gateway.
    :param context: Context around the request.
    :return: A response dict that contains an HTTP status code that indicates the
             result of handling the event.
    """
    logger.info(event)
    table_name = 'dartscore'
    route_key = event.get('requestContext', {}).get('routeKey')
    connection_id = event.get('requestContext', {}).get('connectionId')
    if table_name is None or route_key is None or connection_id is None:
        logger.info('something wrong')
        return {'statusCode': 400}

    table = boto3.resource('dynamodb').Table(table_name)
    logger.info("Request: %s, use table %s.", route_key, table.name)

    response = {}
    if event["requestContext"]["eventType"] == "CONNECT":
        logger.info(event)
        game_id = event.get('queryStringParameters', {'game': 'guest'}).get('game')
        player = event.get('queryStringParameters', {'player': 'guest'}).get('player')
        response['statusCode'] = handle_connect(game_id, table, connection_id, player)
    # elif route_key == '$disconnect':
    #     response['statusCode'] = handle_disconnect(table, connection_id)
    elif route_key == '$default':
        logger.info("I am recieveing somethign i think")
        body = json.loads(event['body'])
        logger.info(body)
        game_id = body.get('game_id')
        domain = event.get('requestContext', {}).get('domainName')
        stage = event.get('requestContext', {}).get('stage')
        if domain is None or stage is None:
            logger.warning(
                "Couldn't send message. Bad endpoint in request: domain '%s', "
                "stage '%s'", domain, stage)
            response['statusCode'] = 400
        else:
            apig_management_client = boto3.client(
                'apigatewaymanagementapi', endpoint_url=f'https://{domain}/{stage}')
            response['statusCode'] = handle_message(
                table, game_id, body, apig_management_client)
    # else:
    #     response['statusCode'] = 404

    return response
