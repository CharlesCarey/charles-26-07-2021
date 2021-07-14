/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/react';

import { theme } from 'platform/design-system/theme';

import type { ToastWithId } from '../../types';

type ToasterProps = {
  toast: ToastWithId;
  onDismiss: (toast: ToastWithId) => void;
};

export const Toaster = ({ toast, onDismiss }: ToasterProps) => (
  <div
    css={css`
      padding: ${theme.layout.spacing.small} ${theme.layout.spacing.medium};
      background-color: ${toast.type === 'success'
        ? theme.colors.indicator.positive
        : theme.colors.indicator.negative};
      font-family: ${theme.text.font.body};
      font-size: ${theme.text.size.body};
      max-width: 200px;
      border-radius: ${theme.layout.edges.small};
      margin: ${theme.layout.spacing.medium} 0;
      display: flex;
      align-items: center;
      z-index: 2;
    `}
  >
    <h4
      css={css`
        margin: 0;
      `}
    >
      {toast.text}
    </h4>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => onDismiss(toast)}
      css={css`
        cursor: pointer;
      `}
    >
      <path
        d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
        fill="currentColor"
      />
    </svg>
  </div>
);
