import WebSocket from 'ws';

import { Room, RoomPlayer } from './types';
import { AddUserToRoomRequest } from 'server/types';

const rooms = new Map<number, Room>();

let idCounter = 0;

const createRoomId = (): number => {
  return idCounter++;
};

export const createRoom = (): Room => {
  const index = createRoomId();

  const newRoom: Room = { players: [] };
  rooms.set(index, newRoom);
  console.log('🚀 ~ createRoom ~ newRoom:', newRoom);
  console.log('New room created with index:', index);

  return newRoom;
};

// fix this:
export const addPlayerToRoom = (
  ws: WebSocket,
  command: AddUserToRoomRequest
): void => {
  // indexRoom: number,
  // player: RoomPlayer
  // const room = rooms.get(indexRoom);
  // if (room) {
  //   room.players.push(player as RoomPlayer);
  //   console.log(`Player ${player} added to room ${indexRoom}`);
  // } else {
  //   console.error(`Room with index ${indexRoom} not found`);
  // }
};
