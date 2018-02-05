const twilio = require('twilio');
const AWS = require('aws-sdk');
const async = require('async');
const cheerio = require('cheerio');
const fs = require('fs');

AWS.config.update({region: 'us-west-1' });

const s3 = new AWS.S3({ region: 'us-west-1' });
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const params = {
    TableName: 'Supporters-dev',
    FilterExpression: '#letter_sent = :letter_sent',
    ExpressionAttributeNames: {
        '#letter_sent': 'letter_sent'
    },
    ExpressionAttributeValues: {
        ':letter_sent': false
    },
    Limit: 1 // Limit?
}

const ASYNC_LIMIT = 5;
const IMAGE_URL = 'https://s3-us-west-1.amazonaws.com/facesofdaca-letter-supporters/'

const faultySignatures = [];
const letterTemplate = fs.readFileSync('./test.html');
dynamoDB.scan(params, function(err, data) {
    if (err) {
        console.log(err);
    } else {

        async.eachLimit(data.Items, 5, (item, callback) => {
            if (!item.image_key) {
                faultySignatures.push(item)
                return callback(new Error('No image key found for: ', JSON.stringify(item)));
            }
            async.waterfall([
                // function getSignatureHelper(cb) {
                //     getSignature(item.image_key, (err, data) => {
                //         if (err) {
                //             return cb(err)
                //         }
                //         return cb(null, data.body);
                //     })
                // },
                parseLetterAndInjectImage.bind(null, item),
                // save to s3
                // FAX
            ], (err) => {
                if (err) {
                    console.log('Error during the waterfall process: ', err);
                    console.log(item);
                    console.log('Writing to file for later inspection...')
                    faultySignatures.push(item);
                }
                
            })
        }, (err) => {
            console.log(err.message);
        });
    }
})

function getSignature(id, cb) {
    var params = {
        Bucket: 'facesofdaca-letter-supporters',
        Key: id
    };
    s3.getObject(params, function(err, data) {
        if (err) {
            console.log(err, err.stack);
            return cb(err);
        }
        else {
            return cb(null, data)
        }
    });
}

function parseLetterAndInjectImage(item, cb) {
    const url = IMAGE_URL + item.image_key;
    const $ = cheerio.load(letterTemplate);

    $('.signature').append('<img style="height: 60px; width: 200px;" src="' + url + '" />')
    const result = $.html();
    fs.writeFile('./tmp_letters/' + item.image_key + '.html', result, 'utf8', function (err) {
        if (err) {
            return cb(err);
        }
        return cb(null);
    })
}
