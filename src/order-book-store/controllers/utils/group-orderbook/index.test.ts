import { roundByGroup, groupOrderBook } from './index';

describe('Group order book utils', () => {
  describe('Round by group', () => {
    it('should round down if value is bigger', () => {
      expect(roundByGroup(1250.03, 0.05)).toBe(1250);
      expect(roundByGroup(1251.08, 0.1)).toBe(1251);
      expect(roundByGroup(1250.1, 0.25)).toBe(1250);
      expect(roundByGroup(1250.4, 0.5)).toBe(1250);
      expect(roundByGroup(1250.8, 1)).toBe(1250);
      expect(roundByGroup(1251, 2.5)).toBe(1250);
    });

    it('should return the same value if it is divisible by the group', () => {
      expect(roundByGroup(3000, 0.05)).toBe(3000);
      expect(roundByGroup(3000.05, 0.1)).toBe(3000);
      expect(roundByGroup(3000.6, 0.25)).toBe(3000.5);
      expect(roundByGroup(1250, 0.5)).toBe(1250);
      expect(roundByGroup(1250, 1)).toBe(1250);
      expect(roundByGroup(1250, 2.5)).toBe(1250);
    });
  });

  describe('Group order book', () => {
    it('should group orderbook correctly based on the grouping', () => {
      const ungroupedOrderBook = {
        500: {
          size: 5,
          total: 70,
        },
        '500.03': {
          size: 10,
          total: 80,
        },
        '500.037': {
          size: 4,
          total: 84,
        },
        501: {
          size: 100,
          total: 184,
        },
        '501.014': {
          size: 18,
          total: 202,
        },
      };

      expect(groupOrderBook(ungroupedOrderBook, 0.01)).toMatchInlineSnapshot(`
        Object {
          "500": Object {
            "size": 5,
            "total": 70,
          },
          "500.03": Object {
            "size": 14,
            "total": 84,
          },
          "501": Object {
            "size": 100,
            "total": 184,
          },
          "501.01": Object {
            "size": 18,
            "total": 202,
          },
        }
      `);
      expect(groupOrderBook(ungroupedOrderBook, 0.05)).toMatchInlineSnapshot(`
        Object {
          "500": Object {
            "size": 19,
            "total": 84,
          },
          "501": Object {
            "size": 118,
            "total": 202,
          },
        }
      `);
      expect(groupOrderBook(ungroupedOrderBook, 1)).toMatchInlineSnapshot(`
        Object {
          "500": Object {
            "size": 19,
            "total": 84,
          },
          "501": Object {
            "size": 118,
            "total": 202,
          },
        }
      `);
      expect(groupOrderBook(ungroupedOrderBook, 2.5)).toMatchInlineSnapshot(`
        Object {
          "500": Object {
            "size": 137,
            "total": 202,
          },
        }
      `);
    });
  });
});
