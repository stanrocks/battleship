import WebSocket from 'ws';

import { RegRequest, RegRequestData, RegResponse } from 'types';
import { addPlayer, getPlayerByName } from './store';

export const handleReg = function (ws: WebSocket, command: RegRequest) {
  try {
    const parsedData: RegRequestData = JSON.parse(command.data);
    console.log('Parsed login/create data:', parsedData);

    const existingPlayer = getPlayerByName(parsedData.name);

    if (existingPlayer) {
      if (existingPlayer.password === parsedData.password) {
        console.log(
          'Player found. Login successful for player',
          existingPlayer.name
        );

        const responseData: RegResponse['data'] = {
          name: existingPlayer.name,
          index: existingPlayer.index,
          error: false,
          errorText: '',
        };

        const response: RegResponse = {
          type: 'reg',
          data: responseData,
          id: command.id,
        };

        ws.send(JSON.stringify(response));
      } else {
        console.log('Incorrect password');

        const responseData: RegResponse['data'] = {
          name: parsedData.name,
          index: -1,
          error: true,
          errorText: 'Incorrect password',
        };

        const response: RegResponse = {
          type: 'reg',
          data: responseData,
          id: command.id,
        };

        ws.send(JSON.stringify(response));
      }
    } else {
      console.log(
        'No such player found, creating new player:',
        parsedData.name
      );

      const newPlayer = addPlayer(parsedData.name, parsedData.password || '');

      const responseData: RegResponse['data'] = {
        name: newPlayer.name,
        index: newPlayer.index,
        error: false,
        errorText: '',
      };

      const response: RegResponse = {
        type: 'reg',
        data: responseData,
        id: command.id,
      };

      ws.send(JSON.stringify(response));
    }
  } catch (error) {
    console.error('Error handling login/create:', error);

    const errorResponse: RegResponse = {
      type: 'reg',
      data: {
        name: '',
        index: -1,
        error: true,
        errorText: 'Internal server error',
      },
      id: command.id,
    };

    ws.send(JSON.stringify(errorResponse));
  }
};
