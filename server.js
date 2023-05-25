const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // serve login.html file
    fs.readFile('login.html', (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end('Error loading main.html');
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });

  } else {
    // handle 404 not found error
    res.writeHead(404);
    res.end('404 Page Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});