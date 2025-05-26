import WebSocket from 'ws';

import { createRoom, addPlayerToRoom } from './store';
import { AddUserToRoomRequest, CreateRoomRequest } from 'server/types';

export const handleCreateRoom = (ws: WebSocket, command: CreateRoomRequest) => {
  try {
    createRoom();
  } catch (error) {
    console.error('Error handling create room:', error);
  }
};

// fix this:
export const handleAddUserToRoom = (
  ws: WebSocket,
  command: AddUserToRoomRequest
) => {
  console.log('to be implemented');
  addPlayerToRoom(ws, command);
};
