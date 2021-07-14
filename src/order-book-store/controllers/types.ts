import { BTC, ETH } from './constants';

export type SocketMessage = { data: string };

export type OrderBookEntry = {
  size: number;
  total: number;
};

export type OrderBook = {
  [price: number]: OrderBookEntry;
};

export type OrderBookEntries = [price: string, entry: OrderBookEntry][];

export type Group = number;

export type Currency = typeof BTC | typeof ETH;

export type State = {
  socket: WebSocket;
  connectedToEndpoint: boolean;
  batchingProcessorId: ReturnType<typeof setInterval> | null;
  socketMessageListener: ((message: SocketMessage) => void) | null;
  error: Event | null;
  loading: boolean;
  currency: Currency;
  subscribedToCurrency: boolean;
  asks: OrderBook;
  bids: OrderBook;
  group: Group;
};

export type BidAndAskUpdate = [price: number, size: number];

export type UseAskBidDataReturn =
  | {
      loading: true;
      data: null;
    }
  | {
      loading: false;
      data: [string, OrderBookEntry][];
    };

export type UseSpreadReturn =
  | {
      loading: true;
      spread: null;
      spreadPercentage: null;
    }
  | {
      loading: false;
      spread: number;
      spreadPercentage: number;
    };
