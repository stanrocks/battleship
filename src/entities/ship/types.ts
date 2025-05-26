export interface Ship {
  position: {
    x: number;
    y: number;
  };
  direction: boolean;
  length: number;
  type: 'small' | 'medium' | 'large' | 'huge';
}

export interface AddShipsRequestData {
  gameId: number | string;
  ships: Ship[];
  indexPlayer: number | string;
}
