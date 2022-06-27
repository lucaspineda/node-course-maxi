const http = require('http')
const fs = require('fs')

function rqListener(req, res) {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html>')
    res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>')
    res.write('</html>')    
    return res.end();     
  }
  if (url === '/message' && method === 'POST') {
    fs.writeFileSync('message.txt', 'DUMMY')
    res.StatusCode = 302;
    res.setHeader('Location', '/')
    return res.end();
  }
  console.log(req.url, req.method, req.headers)
  res.setHeader('Content-Type', 'text/html')
  res.write('<html>heello</html>')
  res.end(); 
}

const server = http.createServer(rqListener);

server.listen(3000);