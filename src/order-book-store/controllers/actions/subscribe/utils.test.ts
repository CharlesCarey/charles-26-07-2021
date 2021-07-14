import { processBidAndAskUpdate, addTotalsToOrderBook } from './utils';

describe('Subscribe utils', () => {
  describe('processBidAndAskUpdate', () => {
    it('should add a new entry to the orderbook correctly', () => {
      const orderbook = {
        5: { size: 5, total: 0 },
        8: { size: 3, total: 0 },
      };

      processBidAndAskUpdate([6, 4], orderbook);
      expect(orderbook).toMatchInlineSnapshot(`
        Object {
          "5": Object {
            "size": 5,
            "total": 0,
          },
          "6": Object {
            "size": 4,
            "total": 0,
          },
          "8": Object {
            "size": 3,
            "total": 0,
          },
        }
      `);
    });

    it('should update an existing entry correctly', () => {
      const orderbook = {
        5: { size: 5, total: 0 },
        8: { size: 3, total: 0 },
      };

      processBidAndAskUpdate([5, 1], orderbook);
      expect(orderbook).toMatchInlineSnapshot(`
        Object {
          "5": Object {
            "size": 1,
            "total": 0,
          },
          "8": Object {
            "size": 3,
            "total": 0,
          },
        }
      `);
    });

    it('should remove an existing entry if the updated size is zero', () => {
      const orderbook = {
        5: { size: 5, total: 0 },
        8: { size: 3, total: 0 },
      };

      processBidAndAskUpdate([8, 0], orderbook);
      expect(orderbook).toMatchInlineSnapshot(`
        Object {
          "5": Object {
            "size": 5,
            "total": 0,
          },
        }
      `);
    });
  });

  describe('addTotalsToOrderBook', () => {
    it('should sum totals correctly', () => {
      const orderbook = {
        1: { size: 3, total: 0 },
        3: { size: 2, total: 0 },
        5: { size: 5, total: 0 },
        8: { size: 3, total: 0 },
      };

      addTotalsToOrderBook(orderbook);
      expect(orderbook).toMatchInlineSnapshot(`
        Object {
          "1": Object {
            "size": 3,
            "total": 3,
          },
          "3": Object {
            "size": 2,
            "total": 5,
          },
          "5": Object {
            "size": 5,
            "total": 10,
          },
          "8": Object {
            "size": 3,
            "total": 13,
          },
        }
      `);
    });

    it('should sum totals correctly if keys are out of order', () => {
      const orderbook = {
        8: { size: 3, total: 0 },
        1: { size: 3, total: 0 },
        5: { size: 5, total: 0 },
        3: { size: 2, total: 0 },
      };

      addTotalsToOrderBook(orderbook);
      expect(orderbook).toMatchInlineSnapshot(`
          Object {
            "1": Object {
              "size": 3,
              "total": 3,
            },
            "3": Object {
              "size": 2,
              "total": 5,
            },
            "5": Object {
              "size": 5,
              "total": 10,
            },
            "8": Object {
              "size": 3,
              "total": 13,
            },
          }
        `);
    });
  });
});
