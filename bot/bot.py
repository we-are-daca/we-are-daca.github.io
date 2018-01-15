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
        'dreamer',
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
        'trump',
        'illegal',
        'illegals'
        ]


languages = ['en']

api = twitter.Api(
        consumer_key=config[1]['consumer_key'],
        consumer_secret=config[0]['consumer_secret'],
        access_token_key=config[2]['access_token'],
        access_token_secret=config[3]['access_token_secret']
      )

def get_words(text):
    return re.compile('\w+').findall(text)

def get_user(username=None, user_id=None):
    return api.GetUser(screen_name=username, user_id=user_id)

def get_friends(id=None, total_count=10):
    return api.GetFriends(user_id=id, total_count=total_count)

def find_tweets():
    for line in api.GetStreamFilter(track=expressions, languages=languages):
        description = json.dumps(line['user']['description'])
        tokenized = [ word.lower() for word in get_words(description)]
        for w in description_filter:
            if w in tokenized:
                print('----------------------------------------')
                print('not safe. continuing...')
                print(line['user']['description'])
                print('-----------------------------------------')
                continue
        print('IS POTENTIALLY SAFE')
        print(tokenized)
        print(line['user']['screen_name'])
        print(line['user']['name'])
        print(line['user']['description'])
        print(line['user']['followers_count'])
        print(json.dumps(line['text']))
        print('\n-------------------------------------------\n')
        time.sleep(10)

id = get_user('joseiswriting').id

next_c, previous_c, result = api.GetFollowerIDsPaged(user_id=id)

for r in result:
    u = get_user(user_id=r)
    print('print user: ', u)
    api.CreateFriendship(user_id=r)
    print('Followed\n')
    time.sleep(2)

