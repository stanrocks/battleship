import WebSocket from 'ws';

import { BaseRequest, Command } from './types';
import { handleReg } from '../entities/player';
import { handleAddUserToRoom, handleCreateRoom } from '../entities/room';
import { handleAddShips } from '../entities/ship';
import { handleAttack, handleRandomAttack } from '../entities/game';

export const handleCommand = function (ws: WebSocket, command: Command) {
  console.log('Parsed command:', command.type);

  switch (command.type) {
    case 'reg':
      handleReg(ws, command);
      break;
    case 'create_room':
      handleCreateRoom(ws, command);
      break;
    case 'add_user_to_room':
      handleAddUserToRoom(ws, command);
      break;
    case 'add_ships':
      handleAddShips(ws, command);
      break;
    case 'attack':
      handleAttack(ws, command);
      break;
    case 'randomAttack':
      handleRandomAttack(ws, command);
      break;

    default:
      const fallbackCommand = command as BaseRequest;
      console.error('Unknown command type:', fallbackCommand.type);
      ws.send(
        JSON.stringify({
          type: 'error',
          data: 'Unknown command',
          id: fallbackCommand.id,
        })
      );
  }
};
