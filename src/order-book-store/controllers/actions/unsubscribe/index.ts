import type { Currency, SocketMessage } from '../../types';

export const unsubscribeFromOrderBook = async (
  socket: WebSocket,
  currency: Currency,
) => {
  socket.send(
    JSON.stringify({
      event: 'unsubscribe',
      feed: 'book_ui_1',
      product_ids: [currency],
    }),
  );

  return new Promise<void>(resolve => {
    socket.addEventListener(
      'message',
      function unsubscribeListener(message: SocketMessage) {
        const data = JSON.parse(message.data);

        if (data.event === 'unsubscribed' && data.product_ids[0] === currency) {
          socket.removeEventListener('message', unsubscribeListener);
          resolve();
        }
      },
    );
  });
};
