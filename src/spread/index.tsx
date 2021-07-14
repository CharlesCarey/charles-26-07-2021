/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/react';

import { useSpread } from 'order-book-store';
import { SkeletonRow } from 'platform/design-system/components/skeleton-row';
import { theme } from 'platform/design-system/theme';

export const Spread = () => {
  const [spread] = useSpread();

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
      `}
    >
      <h4
        css={css`
          color: ${theme.colors.text.info};
          font-family: ${theme.text.font.data};
          margin: 0 0;
        `}
      >
        Spread:{' '}
        {!spread.loading && (
          <span
            css={css`
              color: ${theme.colors.text.info};
              font-family: ${theme.text.font.data};
              margin: 0 0;
            `}
          >
            {Number(spread.spread).toFixed(1)} (
            {spread.spreadPercentage.toFixed(2)}
            %)
          </span>
        )}
      </h4>
      {spread.loading && (
        <div
          css={css`
            width: 80px;
          `}
        >
          <SkeletonRow />
        </div>
      )}
    </div>
  );
};
