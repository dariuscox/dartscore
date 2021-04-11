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

def _get_allowed_origin(event):
    origin = event.get("headers", {}).get("origin", None)
    logger.info("Origin is: %s", origin)

    if origin and (origin == 'https://www.dartscore.app' or origin == 'http://localhost:3000'):
        return origin

    return None

def generate_id(event, context):
    response = {"statusCode":200}
    allowed_origin = _get_allowed_origin(event)
    if allowed_origin:
        response["headers"] = {
            "Access-Control-Allow-Origin": allowed_origin,
            "Access-Control-Allow-Credentials": True,
        }
    while True:
        game_id = ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(4))
        game_check = table.get_item(Key={'game_id': game_id})
        if not game_check.get('Item'):
            body = {
                "game_id": game_id
            }

            response["body"] = json.dumps(body)
            return response

def create_game(event, context):
    response = {"statusCode":200}
    allowed_origin = _get_allowed_origin(event)
    if allowed_origin:
        response["headers"] = {
            "Access-Control-Allow-Origin": allowed_origin,
            "Access-Control-Allow-Credentials": True,
        }

    print("Event Passed to Handler: " + json.dumps(event))
    body = json.loads(event['body'])
    game_id = body.get('game_id')
    game_type = body.get('game_type')
    print(game_id)
    game = {
        'game_id': game_id,
        'status': 'lobby',
        'game_type' : game_type,
        'players': []
    }
    print(game)
    try:
        table_response = table.put_item(Item=game)

        print(table_response)
        
        body = {
            "game_id": game_id,
        }
        response["body"] = json.dumps(body)
        print(response)
        return response
    except:
        response = {"statusCode":500}
        return response


def initialize_game(event, context):
    response = {"statusCode":200}
    allowed_origin = _get_allowed_origin(event)
    if allowed_origin:
        response["headers"] = {
            "Access-Control-Allow-Origin": allowed_origin,
            "Access-Control-Allow-Credentials": True,
        }
    body = json.loads(event['body'])
    game_id = body.get('game_id')
    game_type = body.get('game_type')
    players = body.get('players')
    if game_type == 'cricket':
        game_state = {}
        for player in players:
            player_score = {
                '20':0,
                '19':0,
                '18':0,
                '17':0,
                '16': 0,
                '15':0,
                'Bull': 0,
                'Total': 0
            }
            game_state[player] = player_score
    if game_type == 'fiveOhOne':
        game_state = {}
        for player in players:
            player_score = {
                'Total': 501,
                'Moves': [] # store as a list so I can just use that position as the move number
            }
            game_state[player] = player_score
    try:
        table.update_item(
            Key={'game_id': game_id},
            UpdateExpression="set game_state = :gs",
            ExpressionAttributeValues={
                ':gs': game_state,
                },  
        ReturnValues="UPDATED_NEW"
        )
        logger.info(
            "Initialized gamestate for Game: %s ", game_id)
        body = {
            "state": "initialized",
        }
        response["body"] = json.dumps(body)
        return response
    except ClientError:
        logger.exception(
            "Couldn't initialize gamestate for Game: %s ", game_id)
        status_code = 503
        return status_code
    