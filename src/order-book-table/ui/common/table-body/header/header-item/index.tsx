/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/react';

import { theme } from 'platform/design-system/theme';

type HeaderItemProps = {
  children: string | number;
};

export const HeaderItem = ({ children }: HeaderItemProps) => (
  <th
    css={css`
      color: ${theme.colors.text.info};
      font-family: ${theme.text.font.data};
      font-size: ${theme.text.size.table};
      letter-spacing: 0.1rem;
      border-bottom: 0.1px solid ${theme.colors.text.info};
      border-top: 2px solid ${theme.colors.text.info};
      border-spacing: 0;
      background: ${theme.colors.background};
      position: sticky;
      top: 0;
      z-index: 1;
      padding-right: ${theme.layout.spacing.large};

      ${theme.layout.screens.tablet} {
        display: none;
      }
    `}
  >
    {children}
  </th>
);
