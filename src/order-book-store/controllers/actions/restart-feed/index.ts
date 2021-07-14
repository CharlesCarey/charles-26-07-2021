import { Action } from 'react-sweet-state';

import type { State } from '../../types';
import { BTC, ETH, BTC_GROUPING, ETH_GROUPING } from '../../constants';
import { subscribeToOrderBook } from '../subscribe';
import { unsubscribeFromOrderBook } from '../unsubscribe';

export const restartFeed =
  ({ shouldToggleFeed }: { shouldToggleFeed: boolean }): Action<State> =>
  async ({ getState, setState, dispatch }) => {
    const { socket, currency, batchingProcessorId, socketMessageListener } =
      getState();

    batchingProcessorId && clearInterval(batchingProcessorId);
    socketMessageListener &&
      socket.removeEventListener('message', socketMessageListener);

    await unsubscribeFromOrderBook(socket, currency);

    if (shouldToggleFeed) {
      const wasPreviousCurrencyEth = currency === ETH;
      setState({
        currency: wasPreviousCurrencyEth ? BTC : ETH,
        group: wasPreviousCurrencyEth ? BTC_GROUPING[0] : ETH_GROUPING[0],
      });
    }

    setState({
      asks: {},
      bids: {},
      error: null,
      loading: true,
      subscribedToCurrency: false,
    });

    dispatch(subscribeToOrderBook());
  };
