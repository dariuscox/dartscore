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
