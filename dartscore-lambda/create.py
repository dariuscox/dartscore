import json
import random
import string

import boto3
from boto3.dynamodb.conditions import Key


dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('dartscore')

def generate_id(event, context):
    while True:
        game_id = ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(4))
        game_check = table.get_item(Key={'game_id': game_id, 'status': 'lobby'})
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
    player1 = body.get('player1')
    print(player1)
    game = {
        'game_id': game_id,
        'status': 'lobby',
        'player1': player1
    }
    print(game)
    try:
        table_response = table.put_item(Item=game)

        print(table_response)
        
        body = {
            "game_id": game_id,
            "player1": player1,
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

def hello(event, context):
    body = {
        "message": "Go Serverless v1.0! Your function executed successfully!",
        "input": event
    }

    response = {
        "statusCode": 200,
        "body": json.dumps(body)
    }

    return response

    # Use this code if you don't use the http event with the LAMBDA-PROXY
    # integration
    """
    return {
        "message": "Go Serverless v1.0! Your function executed successfully!",
        "event": event
    }
    """
