'use strict';

const _ = require('lodash');
const uuid = require('uuid/v4');
const AWS = require('aws-sdk');
const SUPPORTERS_TABLE = process.env.SUPPORTERS_TABLE;

const documentClient = new AWS.DynamoDB.DocumentClient({
  'apiVersion': '2012-08-10',
  'region': 'us-west-1'
});

const s3 = new AWS.S3()

module.exports.requestUploadUrl = (event, context, callback) => {
  const response = {
    statusCode: 200
  };

  let params = {}

  try {
    params = JSON.parse(event.body);
    const hasNameAndType = _.has(params, 'name') && _.has(params, 'type');
    if (!hasNameAndType) {
      throw new Error('Bad params');
    }

    if (params.type && params.type.indexOf('png') === -1) {
      throw new Error('Bad params for picture');  
    }
  } catch (e) {
    console.log(e);
    return callback(null, { statusCode: 401, body: JSON.stringify('Bad request to request url : ' + e.message )});
  }

  const s3Params = {
     Bucket: 'facesofdaca-letter-supporters',
     Key: params.name,
     ContentType: params.type,
     ACL: 'public-read',
     Expires: 180
  };

  var uploadUrl = s3.getSignedUrl('putObject', s3Params);

  callback(null, {
    statusCode: 200,
    headers:  {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({ uploadUrl: uploadUrl })
  });

}

module.exports.create = (event, context, callback) => {
  const response = {
    statusCode: 200
  };

  let data;
  try {
    data = JSON.parse(event.body);
    const hasSupporterInfo = _.has(data, 'name') &&
        _.has(data, 'email') && _.has(data, 'url') && _.has(data, 'occupation');

    if (!hasSupporterInfo) {
      throw new Error('Bad params');
    }

    // Validate data has appropriate values (checking for non empty values for now)
    const email_regex = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    if (!data.name || data.name.length > 36 ||
        !data.email || !email_regex.test(data.email)  ||
        !data.occupation || data.occupation.length > 36 ||
        !data.url || data.url.length > 100) {
      throw new Error('Bad params');
    }
  } catch(error) {
    return callback(null, { statusCode: 401, body: JSON.stringify('Bad request') }) ;
  }

  const id = uuid();
  const name = data.name;
  const email = data.email;
  const url = data.url;
  const occupation = data.occupation;
  const timestamp = (new Date).toISOString();

  // Verify whether the provide email is already taken
  const verifyEmailParams = {
    'TableName': SUPPORTERS_TABLE,
    'FilterExpression': 'email = :email',
    'ExpressionAttributeValues': { ':email': email }
  };

  documentClient.scan(verifyEmailParams, (error, result) => {
    if (error) {
      console.log(error);
      response.statusCode = 400;
      response.body = JSON.stringify({ error: 'Error while verifying email' });

      callback(null, response);
    }

    // Add the supporter, when their email is not taken
    if (result && result.Items && result.Items.length == 0) {
      const params = {
        'TableName': SUPPORTERS_TABLE,
        'Item': {
          'id': id,
          'name': name,
          'email': email,
          'occupation': occupation,
          'url': url,
          'signup_timestamp': timestamp,
          'letter_sent': false
        }
      };

      // Attempt to add the supporter
      documentClient.put(params, (error) => {
        if (error) {
          console.log(error);
          response.statusCode = 400;
          response.body = JSON.stringify({ error: 'Error while adding supporter' });

          callback(null, response);
        }

        response.body = JSON.stringify({
          'id': id,
          'name': name,
          'email': email
        });

        callback(null, response);
      });
    }
    else if (result && result.Items && result.Items.length == 1) {
      response.statusCode = 404;
      response.body = JSON.stringify({ 'error': 'The provided email is already taken' });

      callback(null, response);
      return;
    }
    else {
      console.log(result);
      response.statusCode = 500;
      response.body = JSON.stringify({ 'error': 'There was an unexpected result'});

      callback(null, response);
    }
  });
}

module.exports.retrieve = (event, context, callback) => {
  const response = {
    statusCode: 200
  }

  const id = event.queryStringParameters.id;
  const email = event.queryStringParameters.email;

  // Verify the id and email are not empty and that only one is provided
  if (!_.isString(id) && !_.isString(email)) {
    response.statusCode = 400;
    response.body = JSON.stringify({ 'error': 'Either the id or the email field must be provided'});

    callback(null, response);
    return;
  }
  else if (_.isString(id) && _.isString(email)) {
    response.statusCode = 400;
    response.body = JSON.stringify({ 'error': 'Only provide either the id or email field'});
  }

  // Prepare the query to the database
  const params = {
    'TableName': SUPPORTERS_TABLE
  };

  if (_.isString(id)) {
    params.FilterExpression = 'id = :id';
    params.ExpressionAttributeValues = { ':id': id };
  }
  else {
    params.FilterExpression = 'email = :email';
    params.ExpressionAttributeValues = { ':email': email };
  }

  // Attempt to retrieve the supporter
  documentClient.scan(params, (error, result) => {
    if (error) {
      console.log(error);
      response.statusCode = 400;
      response.body = JSON.stringify({ 'error': 'Failed to retrieve the supporter' });

      callback(null, response);
      return;
    }

    if (result && result.Items && result.Items.length == 1) {
      const { id, name, email } = result.Items[0];
      response.body = JSON.stringify({
        'id': id,
        'name': name,
        'email': email
      });

      callback(null, response);
    }
    else if (result && result.Items && result.Items.length == 0) {
      response.statusCode = 404;

      if (_.isString(id)) {
        response.body = JSON.stringify({ 'error': 'The provided id was not found' });
      }
      else {
        response.body = JSON.stringify({ 'error': 'The provided email was not found' });
      }

      callback(null, response);
    }
    else {
      console.log(result);
      response.statusCode = 500;
      response.body = JSON.stringify({ 'error': 'There was an unexpected result'});

      callback(null, response);
    }
  });
}
