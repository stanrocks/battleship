// WS requests
export interface WebSocketBaseMessage {
  type: string;
  id: number;
}

export interface RegRequestData {
  name: string;
  password: string;
}

export interface RegRequest extends WebSocketBaseMessage {
  type: 'reg';
  data: string;
}

export type WebSocketCommand = RegRequest; // dont forget to add other requests

// WS responses
export interface RegResponse extends WebSocketBaseMessage {
  type: 'reg';
  data: {
    name: string;
    index: number;
    error: boolean;
    errorText: string;
  };
}
