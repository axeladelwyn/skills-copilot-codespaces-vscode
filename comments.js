// Create web server
// Create a web server that responds to a request with a file containing the comments from the previous exercise.

// Use the following code as a starting point:

// var http = require('http');
// var fs = require('fs');

// var server = http.createServer(function (req, res) {
//   fs.readFile('comments.html', function (err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     res.end();
//   });
// });

// server.listen(8000);
// You can use the comments.html file from the previous exercise as a starting point for the comments file.

// To test your server, run it and load http://localhost:8000 in your web browser. You should see the comments page.

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  fs.readFile('comments.html', function (err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
});

server.listen(8000);
// You can use the comments.html file from the previous exercise as a starting point for the comments file.

// To test your server, run it and load http://localhost:8000 in your web browser. You should see the comments page.

