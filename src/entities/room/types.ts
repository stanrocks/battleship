import { Player } from 'entities/player';

export type RoomPlayer = Omit<Player, 'password'>;

export interface Room {
  players: RoomPlayer[];
}
