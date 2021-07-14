import { Action } from 'react-sweet-state';

import type { State, BidAndAskUpdate, SocketMessage } from '../../types';

import { BATCHING_DURATION, ASCENDING, DESCENDING } from './constants';
import { processBidAndAskUpdate, addTotalsToOrderBook } from './utils';

let unprocessedAsks: BidAndAskUpdate[] = [];
let unprocessedBids: BidAndAskUpdate[] = [];

let shouldThrow = false;

export const forceThrow = () => {
  shouldThrow = true;
};

export const cancelForceThrow = () => {
  shouldThrow = false;
};

export const subscribeToOrderBook =
  (): Action<State> =>
  ({ getState, setState }) => {
    const { socket, currency } = getState();

    unprocessedAsks = [];
    unprocessedBids = [];

    socket.send(
      JSON.stringify({
        event: 'subscribe',
        feed: 'book_ui_1',
        product_ids: [currency],
      }),
    );

    socket.addEventListener(
      'message',
      function subscriptionlistener(message: SocketMessage) {
        const data = JSON.parse(message.data);

        if (data.event === 'subscribed' && data.product_ids[0] === currency) {
          socket.removeEventListener('message', subscriptionlistener);
          setState({
            subscribedToCurrency: true,
          });
        }
      },
    );

    const socketMessageListener = (message: SocketMessage) => {
      try {
        if (shouldThrow) {
          throw new Error('Forcefully thrown error');
        }

        const data = JSON.parse(message.data);

        if (data.bids) {
          unprocessedBids = unprocessedBids.concat(data.bids);
        }

        if (data.asks) {
          unprocessedAsks = unprocessedAsks.concat(data.asks);
        }
      } catch (err) {
        setState({ error: err.message });
      }
    };

    socket.addEventListener('message', socketMessageListener);

    setState({
      socketMessageListener,
    });

    const batchingProcessorId = setInterval(() => {
      const { asks, bids } = getState();

      if (unprocessedAsks.length > 0 || unprocessedBids.length > 0) {
        setState({ loading: false });
      }

      unprocessedBids.forEach(unprocessedBid =>
        processBidAndAskUpdate(unprocessedBid, bids),
      );
      addTotalsToOrderBook(bids, ASCENDING);

      unprocessedAsks.forEach(unprocessedAsk =>
        processBidAndAskUpdate(unprocessedAsk, asks),
      );
      addTotalsToOrderBook(asks, DESCENDING);

      setState({
        asks: { ...asks },
        bids: { ...bids },
      });
    }, BATCHING_DURATION);

    setState({ batchingProcessorId });
  };
