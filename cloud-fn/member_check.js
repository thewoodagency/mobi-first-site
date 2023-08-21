exports.handler = function (event, context, callback) {
  const memberContent = `
  <h1>Member checked</h1>
  <p>Member has been checked</p>
  `;

  let body;

  if (event.body) {
    body = JSON.parse(event.body);
  } else {
    body = {};
  }

  if (body.key === 'test') {
    callback(null, {
      statusCode: 200,
      body: memberContent,
    });
  } else {
    callback(null, {
      statusCode: 401,
    });
  }
};
