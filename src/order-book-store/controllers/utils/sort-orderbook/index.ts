import type { OrderBook } from '../../types';

export const orderbookToSortedEntries = (orderBook: OrderBook) =>
  Object.entries(orderBook).sort(
    ([priceA], [priceB]) => Number(priceA) - Number(priceB),
  );
