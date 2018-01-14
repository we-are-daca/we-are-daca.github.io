import yaml
import twitter
import time
import json
import re

config = yaml.load(open('secrets.yml'))

expressions = [
        'undocumented',
        'dreamact',
        'dreamactnow',
        'daca',
        'dreamers',
        'heretostay',
        ]

description_filter = [
        'maga',
        'america',
        'america first',
        'conservative',
        'military',
        'deport',
        'troops',
        'trump'
        ]


languages = ['en']

api = twitter.Api(
        consumer_key=config[1]['consumer_key'],
        consumer_secret=config[0]['consumer_secret'],
        access_token_key=config[2]['access_token'],
        access_token_secret=config[3]['access_token_secret']
      )

for line in api.GetStreamFilter(track=expressions, languages=languages):
    description = json.dumps(line['user']['description'])
    tokenized = [ word.lower() for word in re.split('; |, |\*\n', description)]
    print(tokenized)
    for w in description_filter:
        if w in tokenized:
            print('not safe. continuing...')
            continue
    print(line['user']['name'])
    print(line['user']['description'])
    print(line['user']['followers_count'])
    print(json.dumps(line['text']))
    print('\n-------------------------------------------\n')
    time.sleep(3)






