/** @jsxRuntime classic */
/** @jsx jsx */

import type { ReactNode } from 'react';
import { jsx, css } from '@emotion/react';

import { theme } from 'platform/design-system/theme';

type ResponsiveContainerProps = {
  children: ReactNode;
};

export const ResponsiveGrid = ({ children }: ResponsiveContainerProps) => (
  <div
    css={css`
      width: 100vw;
      height: calc(
        100vh - ${theme.layout.height.medium} - ${theme.layout.height.small}
      );
      overflow-y: overlay;
      display: grid;
      grid-template-columns: 50vw 50vw;

      ${theme.layout.screens.tablet} {
        grid-template-columns: 100vw;
        grid-auto-flow: dense;
      }
    `}
  >
    {children}
  </div>
);
