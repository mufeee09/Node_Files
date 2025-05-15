const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 3000 });

server.on('connection', socket => {
  console.log('Client connected');
  socket.send('Welcome!');
  socket.on('message', msg => {
    console.log('Message:', msg);
    socket.send(`You said: ${msg}`);
  });
});
