import WebSocket from 'ws';

import { AttackRequest, RandomAttackRequest } from 'server/types';

export const handleAttack = (ws: WebSocket, command: AttackRequest) => {
  console.log('to be implemented');
};
export const handleRandomAttack = (
  ws: WebSocket,
  command: RandomAttackRequest
) => {
  console.log('to be implemented');
};
