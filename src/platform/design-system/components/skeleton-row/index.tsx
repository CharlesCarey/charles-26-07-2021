/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css, keyframes } from '@emotion/react';

const shimmer = keyframes`
  100% {-webkit-mask-position:left}
`;

export const SkeletonRow = () => (
  <div
    css={css`
      height: 8px;
      width: 100%;
      border-radius: 4px;
      background-color: #6e757e;
      color: grey;
      -webkit-mask: linear-gradient(-60deg, #000 30%, #0005, #000 70%)
        right/300% 100%;
      background-repeat: no-repeat;
      animation: ${shimmer} 2.5s infinite;
      font-size: 50px;
    `}
  />
);
