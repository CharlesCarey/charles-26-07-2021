/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/react';

import { theme } from 'platform/design-system/theme';

type TableEntryProps = {
  colour?: string;
  children: string | number;
};

export const TableEntry = ({
  colour = '#ffffff',
  children,
}: TableEntryProps) => (
  <td
    css={css`
      color: ${colour};
      font-family: ${theme.text.font.data};
      font-size: ${theme.text.size.table};
      padding-right: ${theme.layout.spacing.large};
    `}
  >
    <div
      css={css`
        line-height: ${theme.layout.height.tableRow};
      `}
    >
      {children}
    </div>
  </td>
);
