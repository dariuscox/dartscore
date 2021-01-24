import json
import random
import string
import logging

from decimal import Decimal

import boto3
from boto3.dynamodb.conditions import Key
from botocore.exceptions import ClientError

logger = logging.getLogger()
logger.setLevel(logging.INFO)


dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('dartscore')

def handle_decimal_type(obj):
  if isinstance(obj, Decimal):
      if float(obj).is_integer():
         return int(obj)
      else:
         return float(obj)
  raise TypeError

def lobby(event, context):
    game_id = event.get('queryStringParameters').get('game')
    logger.info(game_id)
    game = table.get_item(Key={'game_id': game_id})['Item']
    logger.info(game)
    players = game['players']
    body = {
            "players": players,
            }
    response = {
        "statusCode": 200,
        "body": json.dumps(body),
        "headers": {
            "Access-Control-Allow-Origin" : "*", # Required for CORS support to work
            "Access-Control-Allow-Credentials" : True # Required for cookies, authorization headers with HTTPS
            }
    }
    print(response)
    return response

def get_game_state(event, context):
    game_id = event.get('queryStringParameters').get('game')
    logger.info(game_id)
    game = table.get_item(Key={'game_id': game_id})['Item']
    logger.info(game)
    game_state = game['game_state']
    body = {
            "game_state": game_state,
            }
    response = {
        "statusCode": 200,
        "body": json.dumps(body, default=handle_decimal_type),
        "headers": {
            "Access-Control-Allow-Origin" : "*", # Required for CORS support to work
            "Access-Control-Allow-Credentials" : True # Required for cookies, authorization headers with HTTPS
            }
    }
    print(response)
    return response

def update_game_state(event, context):
    body = json.loads(event['body'])
    game_id = body.get('game_id')
    player = body.get('player')
    player_score = body.get('player_score')

    game = table.get_item(Key={'game_id': game_id})['Item']
    game_state = game['game_state']

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
            "Updated Scores for Game: %s, Player: %s ", game_id, player)
        body = {
            "state": "updated",
            "game_state": game_state
        }
        response = {
            "statusCode": 200,
            "body": json.dumps(body, default=handle_decimal_type),
            "headers": {
                    "Access-Control-Allow-Origin" : "*", # Required for CORS support to work
                    "Access-Control-Allow-Credentials" : True # Required for cookies, authorization headers with HTTPS
                }
        }
        return response
    except ClientError:
        logger.exception(
            "Couldn't initialize gamestate for Game: %s ", game_id)
        status_code = 503
        return status_code
