const http = require('http')

function rqListener(req, res) {
  console.log(req.url, req.method, req.headers)
  process.exit(); 
}

const server = http.createServer(rqListener);

server.listen(3000);