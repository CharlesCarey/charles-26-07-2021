import { orderbookToSortedEntries } from './index';

describe('Sort order book', () => {
  it('should return order book as sorted entries', () => {
    const orderbook = {
      502: {
        size: 8,
        total: 12,
      },
      '503.99': {
        size: 1,
        total: 13,
      },
      '500.01': {
        size: 4,
        total: 4,
      },
    };

    expect(orderbookToSortedEntries(orderbook)).toMatchInlineSnapshot(`
      Array [
        Array [
          "500.01",
          Object {
            "size": 4,
            "total": 4,
          },
        ],
        Array [
          "502",
          Object {
            "size": 8,
            "total": 12,
          },
        ],
        Array [
          "503.99",
          Object {
            "size": 1,
            "total": 13,
          },
        ],
      ]
    `);
  });
});
