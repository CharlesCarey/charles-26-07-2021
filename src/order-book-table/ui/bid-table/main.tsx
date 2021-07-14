/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/react';

import { useBidData } from 'order-book-store';
import { useScreenWidth } from 'screen-width';
import { theme } from 'platform/design-system/theme';

import { TableContainer } from '../common/table-container';
import { TableBody } from '../common/table-body';
import { SkeletonTable } from '../common/skeleton-table';

import { isScreenMobile } from '../../utils';

export const BidTable = () => {
  const [bids] = useBidData();
  const [{ screen }] = useScreenWidth();

  const largestTotal = !bids.loading
    ? bids.data[bids.data.length - 1][1].total
    : 0;

  const bidData = bids.loading ? [] : bids.data;
  return (
    <div
      css={css`
        ${theme.layout.screens.tablet} {
          grid-row: 2;
        }
      `}
    >
      <TableContainer>
        <TableBody
          largestTotal={largestTotal}
          orderBookEntries={
            isScreenMobile(screen) ? bidData.reverse() : bidData
          }
          textColor={theme.colors.text.bid}
          depthColor="#3E1F28"
          depthPosition="left"
          columnOrdering="PRICE_FIRST"
          loading={bids.loading}
        />
      </TableContainer>
      {bids.loading && <SkeletonTable />}
    </div>
  );
};
