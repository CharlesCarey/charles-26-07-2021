/** @jsxRuntime classic */
/** @jsx jsx */

import type { ReactNode } from 'react';
import { jsx, css } from '@emotion/react';

type TableRowProps = {
  children: ReactNode;
};

export const TableRow = ({ children }: TableRowProps) => (
  <tr
    css={css`
      position: relative;
    `}
  >
    {children}
  </tr>
);
