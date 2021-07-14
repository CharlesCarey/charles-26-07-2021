import Big from 'big.js';

import type { OrderBook, Group } from '../../types';

export const roundByGroup = (value: number, group: Group) =>
  Big(value).div(group).round(0, Big.roundDown).times(Big(group)).toNumber();

export const groupOrderBook = (orderBook: OrderBook, group: Group) => {
  const initialValue: OrderBook = {};
  return Object.entries(orderBook).reduce((acc, [price, { size, total }]) => {
    const roundedPrice = roundByGroup(Number(price), group);
    const storedVal = acc[roundedPrice];
    if (!storedVal) {
      acc[roundedPrice] = { size, total };
    } else {
      acc[roundedPrice] = {
        size: size + storedVal.size,
        total,
      };
    }

    return acc;
  }, initialValue);
};
