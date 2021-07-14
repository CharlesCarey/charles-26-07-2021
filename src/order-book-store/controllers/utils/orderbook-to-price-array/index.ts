import type { OrderBook } from '../../types';

export const orderBookToPriceArray = (orderBook: OrderBook) =>
  Object.keys(orderBook).map(price => +price);
