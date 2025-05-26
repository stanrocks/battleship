import { Player } from './types';

const players = new Map<string, Player>();

let idCounter = 0;

const createPlayerId = function (): number {
  return idCounter++;
};

export const addPlayer = (name: string, password: string): Player => {
  const index = createPlayerId();
  const newPlayer: Player = { index, name, password };

  players.set(name, newPlayer);
  console.log('Player added to DB:', newPlayer);

  return newPlayer;
};

export const getPlayerByName = (name: string): Player | undefined => {
  return players.get(name);
};

// export const getPlayerByIndex = (index: number): Player | undefined => {
//   for (const player of players.values()) {
//     if (player.index === index) {
//       return player;
//     }
//   }
//
//   return undefined;
// };
