/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/react';

import { theme } from 'platform/design-system/theme';
import { Spread } from 'spread';

export const DesktopOnlySpread = () => (
  <span
    css={css`
      ${theme.layout.screens.tablet} {
        display: none;
      }
    `}
  >
    <Spread />
  </span>
);
