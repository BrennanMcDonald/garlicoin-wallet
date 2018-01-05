var http = require("http");
var litecoin = require("node-litecoin");

var client = new litecoin.Client({
  host: '52.89.91.13',
  port: 8333,
  user: 'USER',
  pass: 'PASS'
});

var resp = client.sendFrom("brennan.mcdonald.mail@gmail.com", "ms9oooDXyXxfuRML1CKN1dNoimtucCFPQf", 100000 ,function(err, balance) {
  if (err) return console.log(err);
  console.log(balance);
});



/*
http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});

   response.end();
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
*/