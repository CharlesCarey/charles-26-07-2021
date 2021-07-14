/** @jsxRuntime classic */
/** @jsx jsx */

import type { ReactNode } from 'react';
import { jsx, css } from '@emotion/react';

import { theme } from 'platform/design-system/theme';

type FooterProps = {
  children: ReactNode;
};

export const Footer = ({ children }: FooterProps) => (
  <footer
    css={css`
      position: absolute;
      bottom: 0;
      width: 100vw;
      height: ${theme.layout.height.medium};
      display: flex;
      justify-content: center;
      align-items: center;
    `}
  >
    {children}
  </footer>
);
