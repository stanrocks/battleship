import WebSocket from 'ws';

import { AddShipsRequest } from 'server/types';

export const handleAddShips = (ws: WebSocket, command: AddShipsRequest) => {
  console.log('to be implemented');
};
