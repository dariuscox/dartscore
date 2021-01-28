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

def _get_allowed_origin(event):
    origin = event.get("headers", {}).get("origin", None)
    logger.info("Origin is: %s", origin)

    if origin and (origin == 'https://www.danielcox.software' or origin == 'http://localhost:3000'):
        return origin

    return None

def handle_decimal_type(obj):
  if isinstance(obj, Decimal):
      if float(obj).is_integer():
         return int(obj)
      else:
         return float(obj)
  raise TypeError

def lobby(event, context):
    response = {"statusCode":200}
    allowed_origin = _get_allowed_origin(event)
    if allowed_origin:
        response["headers"] = {
            "Access-Control-Allow-Origin": allowed_origin,
            "Access-Control-Allow-Credentials": True,
        }
    game_id = event.get('queryStringParameters').get('game')
    logger.info(game_id)
    game = table.get_item(Key={'game_id': game_id})['Item']
    logger.info(game)
    players = game['players']
    body = {
            "players": players,
            }
    response["body"] = json.dumps(body)
    print(response)
    return response

def get_game_state(event, context):
    response = {"statusCode":200}
    allowed_origin = _get_allowed_origin(event)
    if allowed_origin:
        response["headers"] = {
            "Access-Control-Allow-Origin": allowed_origin,
            "Access-Control-Allow-Credentials": True,
        }
    game_id = event.get('queryStringParameters').get('game')
    logger.info(game_id)
    game = table.get_item(Key={'game_id': game_id})['Item']
    logger.info(game)
    game_state = game['game_state']
    body = {
            "game_state": game_state,
            }
    response["body"] = json.dumps(body, default=handle_decimal_type)
    print(response)
    return response

def update_game_state(event, context):
    response = {"statusCode":200}
    allowed_origin = _get_allowed_origin(event)
    if allowed_origin:
        response["headers"] = {
            "Access-Control-Allow-Origin": allowed_origin,
            "Access-Control-Allow-Credentials": True,
        }
    body = json.loads(event['body'])
    game_id = body.get('game_id')
    game_state = body.get('game_state')

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
            "Updated Scores for Game: %s", game_id)
        body = {
            "state": "updated",
            "game_state": game_state
        }
        response["body"] = json.dumps(body, default=handle_decimal_type)
        return response
    except ClientError:
        logger.exception(
            "Couldn't initialize gamestate for Game: %s ", game_id)
        status_code = 503
        return status_code
