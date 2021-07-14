import {
  AskTable,
  BidTable,
  ResponsiveGrid,
  MobileOnlySpread,
  ScreenSizeConditionalStickyHeader,
} from './ui';

export const OrderBookTable = () => (
  <ResponsiveGrid>
    <ScreenSizeConditionalStickyHeader />
    <AskTable />
    <MobileOnlySpread />
    <BidTable />
  </ResponsiveGrid>
);
