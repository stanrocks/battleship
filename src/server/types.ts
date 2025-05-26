// WS requests
export interface BaseRequest {
  type: string;
  data: string;
  id: number;
}

export interface RegRequest extends BaseRequest {
  type: 'reg';
}

export interface CreateRoomRequest extends BaseRequest {
  type: 'create_room';
}

export interface AddUserToRoomRequest extends BaseRequest {
  type: 'add_user_to_room';
}

export interface AddShipsRequest extends BaseRequest {
  type: 'add_ships';
}

export interface AttackRequest extends BaseRequest {
  type: 'attack';
}

export interface RandomAttackRequest extends BaseRequest {
  type: 'randomAttack';
}

export type Command =
  | RegRequest
  | CreateRoomRequest
  | AddUserToRoomRequest
  | AddShipsRequest
  | AttackRequest
  | RandomAttackRequest;

// WS responses
export interface RegResponse {
  type: 'reg';
  data: {
    name: string;
    index: number;
    error: boolean;
    errorText: string;
  };
  id: number;
}
