import { createStore, createHook, createContainer } from 'react-sweet-state';

import type {
  State,
  OrderBookEntries,
  UseAskBidDataReturn,
  UseSpreadReturn,
} from './types';
import { subscribeToOrderBook, setGroup, restartFeed, onInit } from './actions';
import { orderbookToSortedEntries } from './utils/sort-orderbook';
import { groupOrderBook } from './utils/group-orderbook';
import { createWebsocket } from './utils/create-websocket';
import { orderBookToPriceArray } from './utils/orderbook-to-price-array';
import { BTC, ETH_GROUPING, BTC_GROUPING } from './constants';

const initialState: State = {
  socket: createWebsocket(),
  batchingProcessorId: null,
  connectedToEndpoint: false,
  socketMessageListener: null,
  error: null,
  loading: true,
  currency: BTC,
  subscribedToCurrency: false,
  bids: {},
  asks: {},
  group: 0.5,
};

const actions = {
  subscribeToOrderBook,
  setGroup,
  restartFeed,
};

type Actions = typeof actions;

const Store = createStore<State, Actions>({
  initialState,
  actions,
});

export const OrderBookStoreContainer = createContainer<State, Actions, {}>(
  Store,
  {
    onInit,
  },
);

export const useAskData = createHook<State, Actions, UseAskBidDataReturn, void>(
  Store,
  {
    selector: state => {
      const { group, asks, loading } = state;

      if (loading) {
        return { loading, data: null };
      }

      const groupedOrderBook = groupOrderBook(asks, group);
      return { loading, data: orderbookToSortedEntries(groupedOrderBook) };
    },
  },
);

export const useBidData = createHook<State, Actions, UseAskBidDataReturn, void>(
  Store,
  {
    selector: state => {
      const { group, bids, loading } = state;

      if (loading) {
        return { loading, data: null };
      }

      const groupedOrderBook = groupOrderBook(bids, group);
      return { loading, data: orderbookToSortedEntries(groupedOrderBook) };
    },
  },
);

export const useSpread = createHook<State, Actions, UseSpreadReturn, void>(
  Store,
  {
    selector: state => {
      const { asks, bids, loading } = state;

      if (loading) {
        return { loading, spread: null, spreadPercentage: null };
      }

      const highestAsk = Math.max(...orderBookToPriceArray(asks));
      const lowestBid = Math.min(...orderBookToPriceArray(bids));

      const spread = highestAsk - lowestBid;
      const spreadPercentage = (spread / highestAsk) * 100;

      return { loading, spread, spreadPercentage };
    },
  },
);

export const useGroup = createHook(Store, {
  selector: state => ({
    group: state.group,
    availableGroupings: state.currency === BTC ? BTC_GROUPING : ETH_GROUPING,
  }),
});

export const useOrderBookActions = createHook(Store, { selector: null });

export const useCurrencySubscriptionState = createHook(Store, {
  selector: state => ({
    currency: state.currency,
    subscribedToCurrency: state.subscribedToCurrency,
  }),
});

export const useErrorState = createHook(Store, {
  selector: state => ({
    error: state.error,
  }),
});

export type { OrderBookEntries };
