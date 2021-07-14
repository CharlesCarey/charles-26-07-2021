/** @jsxRuntime classic */
/** @jsx jsx */

import { Fragment } from 'react';
import { jsx, css } from '@emotion/react';

import { theme } from 'platform/design-system/theme';
import { SkeletonRow } from 'platform/design-system/components/skeleton-row';

import { NUMBER_OF_ROWS } from './constants';

export const SkeletonTable = () => (
  <Fragment>
    {Array.from(Array(NUMBER_OF_ROWS)).map((_, index) => (
      <div
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        css={css`
          height: ${theme.layout.height.tableRow};
          display: flex;
          align-items: center;
          width: 85%;
          margin: auto;
        `}
      >
        <SkeletonRow />
      </div>
    ))}
  </Fragment>
);
