/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/react';

import { theme } from 'platform/design-system/theme';

import { Spread } from 'spread';

export const MobileOnlySpread = () => (
  <div
    css={css`
      display: none;

      ${theme.layout.screens.tablet} {
        display: flex;
        flex-direction: row;
        justify-content: center;
        grid-row: 3;
        margin: ${theme.layout.spacing.small} 0;
      }
    `}
  >
    <Spread />
  </div>
);
