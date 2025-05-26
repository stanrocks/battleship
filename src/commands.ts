import WebSocket from 'ws';

import { WebSocketCommand } from 'types';
import { handleReg } from './player';

export const handleCommand = function (
  ws: WebSocket,
  command: WebSocketCommand
) {
  console.log('Parsed command:', command.type);

  switch (command.type) {
    case 'reg':
      handleReg(ws, command);
      break;

    default:
      console.error('Unknown command type:', command.type);
      ws.send(
        JSON.stringify({
          type: 'error',
          data: 'Unknown command',
          id: command.id,
        })
      );
  }
};
