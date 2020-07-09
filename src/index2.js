var url = require('url');

var result =url.parse("ssh://git@ssh.github.com")
//console.log(result.hostname)

// if (validUrl.isUri(url)){
//     console.log('Looks like an URI');
// } 
// else {
//     console.log('Not a URI');
// }


var request = require('request');
request({method: 'HEAD', uri:'ssh://git@ssh.github.com'}, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
  }else console.log('fail')
})