var request = require('request');
var entries = require('./entries.js');
var config = require('./config-local.js');


// Set the headers
var headers = {
  'content-type':'application/json',
  'X-Api-Key': config.xApiKey
};

entries.forEach(element => {
  // Configure the request
  var options = {
    url: `https://api.clockify.me/api/workspaces/${config.workspaceId}/timeEntries/`,
    method: 'POST',
    headers: headers,
    body: JSON.stringify(element)
  };

  // Start the request
  //console.log("Posting:", options);
  console.log(element);

  request(options, function (error, response, body) {
    /*
    console.log('error:',error);
    console.log('response:',response);
    console.log('body:',body);
    */
    if (!error && response.statusCode == 200) {
        // Print out the response body
        console.log(body);
    } else {
        console.log(error);
    }
  });
  console.log(".");
});