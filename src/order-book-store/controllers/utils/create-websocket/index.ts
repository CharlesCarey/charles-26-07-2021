import { WEBSOCKET_ENDPOINT } from './constants';

export const createWebsocket = () => new WebSocket(WEBSOCKET_ENDPOINT);
