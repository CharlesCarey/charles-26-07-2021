/** @jsxRuntime classic */
/** @jsx jsx */

import type { ReactNode } from 'react';
import { jsx, css } from '@emotion/react';

type TableContainerProps = {
  children: ReactNode;
};

export const TableContainer = ({ children }: TableContainerProps) => (
  <table
    css={css`
      width: 100%;
      text-align: right;
      height: fit-content;
      position: relative;
    `}
    cellSpacing={0}
    cellPadding={0}
  >
    {children}
  </table>
);
