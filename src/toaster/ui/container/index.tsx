/** @jsxRuntime classic */
/** @jsx jsx */

import type { ReactNode } from 'react';
import { jsx, css } from '@emotion/react';

import { theme } from 'platform/design-system/theme';

type ContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => (
  <div
    css={css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 0 0 0 ${theme.layout.spacing.large};
      max-height: 200px;
    `}
  >
    {children}
  </div>
);
