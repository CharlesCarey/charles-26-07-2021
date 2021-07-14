/** @jsxRuntime classic */
/** @jsx jsx */

import type { ReactNode } from 'react';
import { jsx, css } from '@emotion/react';

import { theme } from 'platform/design-system/theme';

type ContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => (
  <header
    css={css`
      width: 100vw;
      height: ${theme.layout.height.small};
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: ${theme.layout.spacing.small} ${theme.layout.spacing.medium};
      box-sizing: border-box;
    `}
  >
    {children}
  </header>
);
