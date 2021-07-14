/* eslint-disable no-param-reassign */

import { ASCENDING, DESCENDING } from './constants';
import type { OrderBook, BidAndAskUpdate } from '../../types';

export const processBidAndAskUpdate = (
  [price, size]: BidAndAskUpdate,
  orderBook: OrderBook,
) => {
  if (size === 0) {
    delete orderBook[price];
  } else {
    orderBook[price] = { size, total: 0 };
  }
};

export const addTotalsToOrderBook = (
  orderbook: OrderBook,
  sortOrder: typeof ASCENDING | typeof DESCENDING,
) => {
  let total = 0;
  const sortedKeys = Object.keys(orderbook).sort();

  if (sortOrder === DESCENDING) {
    sortedKeys.reverse();
  }

  sortedKeys.forEach(price => {
    const { size } = orderbook[Number(price)];
    total += size;
    orderbook[Number(price)] = {
      size,
      total,
    };
  });
};
