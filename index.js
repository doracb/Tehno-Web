var http = require("http");

// create a server object:
http.createServer(function (req, res) {
  res.write("Hello from VS Code!"); // write a response
  res.end(); // end the response
}).listen(8080); // server listens on port 8080
