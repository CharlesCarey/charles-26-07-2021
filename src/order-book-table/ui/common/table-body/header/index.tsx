import { HeaderItem } from './header-item';

import type { ColumnOrdering } from '../types';

type HeaderProps = {
  columnOrdering: ColumnOrdering;
};

export const Header = ({ columnOrdering }: HeaderProps) => (
  <thead>
    {columnOrdering === 'PRICE_FIRST' ? (
      <tr>
        <HeaderItem>PRICE</HeaderItem>
        <HeaderItem>SIZE</HeaderItem>
        <HeaderItem>TOTAL</HeaderItem>
      </tr>
    ) : (
      <tr>
        <HeaderItem>TOTAL</HeaderItem>
        <HeaderItem>SIZE</HeaderItem>
        <HeaderItem>PRICE</HeaderItem>
      </tr>
    )}
  </thead>
);
