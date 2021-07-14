/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/react';

import { theme } from 'platform/design-system/theme';

export const Title = () => (
  <h1
    css={css`
      color: ${theme.colors.text.primary};
      font-family: ${theme.text.font.heading};
      font-size: ${theme.text.size.heading};
      margin: 0;
    `}
  >
    Order Book
  </h1>
);
