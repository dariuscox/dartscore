import json
import random
import string
import logging

import boto3
from boto3.dynamodb.conditions import Key
from botocore.exceptions import ClientError

logger = logging.getLogger()
logger.setLevel(logging.INFO)


dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('dartscore')

def generate_id(event, context):
    while True:
        game_id = ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(4))
        game_check = table.get_item(Key={'game_id': game_id})
        if not game_check.get('Item'):
            body = {
                "game_id": game_id
            }

            response = {
                "statusCode": 200,
                "body": json.dumps(body),
                "headers": {
                    "Access-Control-Allow-Origin" : "*", # Required for CORS support to work
                    "Access-Control-Allow-Credentials" : True # Required for cookies, authorization headers with HTTPS
                }
            }
            return response

def create_game(event, context):
    print("Event Passed to Handler: " + json.dumps(event))
    body = json.loads(event['body'])
    game_id = body.get('game_id')
    print(game_id)
    game = {
        'game_id': game_id,
        'status': 'lobby',
        'type' : 'cricket',
        'players': []
    }
    print(game)
    try:
        table_response = table.put_item(Item=game)

        print(table_response)
        
        body = {
            "game_id": game_id,
        }
        response = {
            "statusCode": 200,
            "body": json.dumps(body)
        }
        print(response)
        return response
    except:
        response = {"statusCode":500}
        return response

def add_player(event, context):
    """
    Handles new connections by adding the connection ID and user name to the
    DynamoDB table.

    :param user_name: The name of the user that started the connection.
    :param table: The DynamoDB connection table.
    :param connection_id: The websocket connection ID of the new connection.
    :return: An HTTP status code that indicates the result of adding the connection
             to the DynamoDB table.
    """
    body = json.loads(event['body'])
    game_id = body.get('game_id')
    player = body.get('player')
    connection_id = body.get('cid')
    status_code = 200
    player_dict = {
        'player': player,
        'cid': connection_id
    }
    try:
        response = table.update_item(
            Key={'game_id': game_id},
            UpdateExpression="SET players = list_append(players, :p)",
            ExpressionAttributeValues={
                ':p': [player_dict],
                },  
        ReturnValues="UPDATED_NEW"
        )
        logger.info(
            "Added connection %s for user %s.", connection_id, player)
    except ClientError:
        logger.exception(
            "Couldn't add connection %s for user %s.", connection_id, player)
        status_code = 503
    return status_code