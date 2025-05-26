import { WebSocketServer } from 'ws';

import { httpServer } from './src/http_server';
import { handleCommand } from './src/server/cmdHandler';

const HTTP_PORT = 8181;
const WS_PORT = 3000;

console.log(`Start static HTTP server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

console.log(`Start WebSocket server on the ${WS_PORT} port!`);
const wss = new WebSocketServer({ port: WS_PORT });

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('error', console.error);

  ws.on('message', (data) => {
    console.log('Received raw data: %s', data);

    try {
      const parsed = JSON.parse(data.toString());

      handleCommand(ws, parsed);
    } catch (error) {
      console.error('Parsing error:', error);
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
    // call fn that resets player and maybe game state
  });
});

const shutdown = function () {
  console.log('Shutting down servers...');

  wss.close(() => {
    console.log(`WebSocket server on port ${WS_PORT} is closed.`);
  });

  httpServer.close(() => {
    console.log(`HTTP server on port ${HTTP_PORT} is closed.`);
  });
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
