const http = require('http')

function rqListener(req, res) {
  console.log(req.url, req.method, req.headers)
  res.setHeader('Content-Type', 'text/html')
  res.write('<html>heello</html>')
  res.end(); 
}

const server = http.createServer(rqListener);

server.listen(3000);