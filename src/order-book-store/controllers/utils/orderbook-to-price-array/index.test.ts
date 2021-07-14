import { orderBookToPriceArray } from './index';

describe('Orderbook to price array', () => {
  it('should turn an orderbook into an array with prices as numbers', () => {
    const orderbook = {
      '500.01': {
        size: 4,
        total: 4,
      },
      502: {
        size: 8,
        total: 12,
      },
      '503.99': {
        size: 1,
        total: 13,
      },
    };
    const priceArr = orderBookToPriceArray(orderbook);
    expect(priceArr).toHaveLength(3);
    priceArr.forEach(price => {
      expect(typeof price).toBe('number');
    });
  });
});
