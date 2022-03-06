exports.handler = async function (event, context) {
  var axios = require('axios');
  const querystring = event.queryStringParameters;
  const ticket = querystring.ticket;
  const fileId = querystring.file;
  console.log('ticket : ', ticket, '\nfile : ', fileId);

  const { data } = await axios.get(
    `https://api.streamtape.com/file/dl?file=${fileId}&ticket=${ticket}`,
    { headers: {} }
  );
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};

// gYj2z0LL9XsgQl
