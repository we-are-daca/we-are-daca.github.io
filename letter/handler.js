'use strict';

module.exports.verify = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'We are operating as expected!'
    }),
  };

  callback(null, response);
};
