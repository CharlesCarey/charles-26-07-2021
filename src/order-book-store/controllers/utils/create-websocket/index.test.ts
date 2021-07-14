import { createWebsocket } from './index';
import { WEBSOCKET_ENDPOINT } from './constants';

describe('Create websocket', () => {
  it('should create a websocket using the correct url', () => {
    const socket = createWebsocket();
    expect(socket.constructor.name).toBe('WebSocket');
    expect(socket.url).toBe(WEBSOCKET_ENDPOINT);
  });
});
