const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080;

const startServer = () => {
  server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use. Trying a different port...`);
      const newPort = port + 1; //Try to use next available port
      startServer(newPort);
    } else {
      console.error(`Server failed to start: ${err}`);
    }
  });
};

startServer();