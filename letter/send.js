const twilio = require('twilio');
const AWS = require('aws-sdk');
const async = require('async');

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
    Limit: 500 // Limit?
}

dynamoDB.scan(params, function(err, data) {
    if (err) {
        console.log(err);
    } else {

        // We need to async limit this iteration
        data.Items.map(function(element) {
            console.log(element);
            if (!element.image_key) {
                console.log('No image key found for: ', element);
                return;
            }
            // Waterfall?
            // getSignature
            // Parse document
            // Upload to s3
            // Send fax
            getSignature(element.image_key, (err, data) => {
                if (!err) {
                    console.log(data);
                }
            });
        });
    }
})

function getSignature(id, cb) {
    var params = {
        Bucket: 'facesofdaca-letter-supporters',
        Key: id
    };
    console.log('getting object');
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
