var http = require("http")

http.createServer(function (request, response) {

   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'})

   // Send the response body as "Hello World"
<<<<<<< HEAD
   response.end('Change is the only constant in the world'\n')
=======
   response.end('Change is the Only Constant in the World!\n')
>>>>>>> 7c2e6e0 (update helloworld)
}).listen(3333)

// Console will print the message
console.log('Server running')
