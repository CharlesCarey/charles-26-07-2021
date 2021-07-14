/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/react';

import { theme } from 'platform/design-system/theme';

type ButtonProps = {
  children: string;
  onclick: () => void;
  type: 'primary' | 'secondary';
};

export const Button = ({ children, onclick, type }: ButtonProps) => (
  <button
    type="button"
    onClick={onclick}
    css={css`
      background-color: ${theme.colors.button[type]};
      border: none;
      border-radius: ${theme.layout.edges.small};
      height: ${theme.layout.height.small};
      width: 100px;
      margin: ${theme.layout.spacing.small};
      color: ${theme.colors.text.primary};
      font-family: ${theme.text.font.body};
      font-size: ${theme.text.size.body};
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    `}
  >
    {children}
  </button>
);
