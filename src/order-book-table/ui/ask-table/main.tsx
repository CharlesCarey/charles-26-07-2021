/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/react';

import { useAskData } from 'order-book-store';
import { useScreenWidth } from 'screen-width';
import { theme } from 'platform/design-system/theme';

import { TableContainer } from '../common/table-container';
import { TableBody } from '../common/table-body';
import { SkeletonTable } from '../common/skeleton-table';

import { isScreenMobile } from '../../utils';

export const AskTable = () => {
  const [asks] = useAskData();
  const [{ screen }] = useScreenWidth();

  const largestTotal = !asks.loading ? asks.data[0][1].total : 0;

  const isMobileScreen = isScreenMobile(screen);

  return (
    <div
      css={css`
        ${theme.layout.screens.tablet} {
          grid-row: 4;
        }
      `}
    >
      <TableContainer>
        <TableBody
          loading={asks.loading}
          largestTotal={largestTotal}
          orderBookEntries={asks.loading ? [] : asks.data.reverse()}
          textColor={theme.colors.text.ask}
          depthColor="#123534"
          depthPosition={isMobileScreen ? 'left' : 'right'}
          columnOrdering={isMobileScreen ? 'PRICE_FIRST' : 'PRICE_LAST'}
        />
      </TableContainer>
      {asks.loading && <SkeletonTable />}
    </div>
  );
};
