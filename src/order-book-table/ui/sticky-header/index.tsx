/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/react';

import { theme } from 'platform/design-system/theme';

import { HeaderItem } from './header-item';

export const ScreenSizeConditionalStickyHeader = () => (
  <div
    css={css`
      display: none;

      ${theme.layout.screens.tablet} {
        display: flex;
        flex-direction: row;
        position: sticky;
        top: 0;
        z-index: 1;
        grid-row: 1;
        text-align: right;
        line-height: ${theme.layout.height.tableRow};
      }
    `}
  >
    <HeaderItem>PRICE</HeaderItem>
    <HeaderItem>SIZE</HeaderItem>
    <HeaderItem>TOTAL</HeaderItem>
  </div>
);
