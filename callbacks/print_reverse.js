var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {
  var arr = html.split("");
  console.log(arr.reverse().join(""));

}

getHTML(requestOptions, printReverse);