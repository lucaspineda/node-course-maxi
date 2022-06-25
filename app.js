const http = require('http')

function rqListener(req, res) {
  const url = req.url;
  if (url === '/') {
    res.write('<html>')
    res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>')
    res.write('</html>')    
    return res.end();     
  }
  console.log(req.url, req.method, req.headers)
  res.setHeader('Content-Type', 'text/html')
  res.write('<html>heello</html>')
  res.end(); 
}

const server = http.createServer(rqListener);

server.listen(3000);