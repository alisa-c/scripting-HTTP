var https = require('https');

module.exports = function getHTML (options, callback) {

  var buffer = "";

  https.get(options, function (response) {


  response.setEncoding('utf8');


  response.on('data', function (data) {
    buffer += data
  });


  response.on('end', function() {
    callback(buffer);
  });

});

}
