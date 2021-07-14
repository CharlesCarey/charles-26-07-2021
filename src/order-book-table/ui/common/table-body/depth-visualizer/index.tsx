/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/react';

import { theme } from 'platform/design-system/theme';

import type { DepthPosition } from '../types';

type DepthVisualiserProps = {
  depthColor: string;
  percentage: number;
  position: DepthPosition;
};

export const DepthVisualizer = ({
  depthColor,
  percentage,
  position,
}: DepthVisualiserProps) => (
  <div
    css={css`
      height: ${theme.layout.height.tableRow};
      width: ${percentage}%;
      background-color: ${depthColor};
      position: absolute;
      ${position}: 0;
      z-index: -1;
    `}
  />
);
