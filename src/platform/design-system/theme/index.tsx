/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css, Global } from '@emotion/react';

import {
  red100,
  red200,
  green100,
  purple,
  white,
  navy,
  grey100,
  grey200,
  grey300,
  grey400,
} from './colours';
import {
  code as codeFont,
  heading as headingFont,
  body as bodyFont,
} from './text/font';
import {
  heading as headingSize,
  body as bodySize,
  table as tableSize,
} from './text/size';
import {
  small as smallSpacing,
  medium as mediumSpacing,
  large as largeSpacing,
} from './layout/spacing';
import {
  small as smallHeight,
  medium as mediumHeight,
  tableRow as tableRowHeight,
} from './layout/height';
import { small as smallEdges, medium as mediumEdges } from './layout/edges';
import {
  MOBILE_MEDIA_QUERY,
  TABLET_MEDIA_QUERY,
  LAPTOP_MEDIA_QUERY,
  DESKTOP_MEDIA_QUERY,
} from './layout/screen-sizes';

export const theme = {
  colors: {
    background: 'var(--colors-navy)',
    dropdown: {
      button: 'var(--colors-grey200)',
      expand: 'var(--colors-grey300)',
      hover: 'var(--colors-grey400)',
    },
    button: {
      primary: 'var(--colors-red200)',
      secondary: 'var(--colors-purple)',
    },
    text: {
      ask: 'var(--colors-green)',
      bid: 'var(--colors-red100)',
      info: 'var(--colors-grey100)',
      primary: 'var(--colors-white)',
    },
    indicator: {
      positive: 'var(--colors-green)',
      negative: 'var(--colors-red100)',
    },
  },
  text: {
    font: {
      data: 'var(--font-family-data)',
      heading: 'var(--font-family-heading)',
      body: 'var(--font-family-body)',
    },
    size: {
      body: 'var(--font-size-body)',
      table: 'var(--font-size-table)',
      heading: 'var(--font-size-heading)',
    },
  },
  layout: {
    spacing: {
      small: 'var( --layout-spacing-small)',
      medium: 'var( --layout-spacing-medium)',
      large: 'var( --layout-spacing-large)',
    },
    height: {
      small: 'var( --layout-height-small)',
      medium: 'var( --layout-height-medium)',
      tableRow: 'var( --layout-height-table-row)',
    },
    edges: {
      small: 'var( --layout-edges-small)',
      medium: 'var( --layout-medium-small)',
    },
    screens: {
      mobile: MOBILE_MEDIA_QUERY,
      tablet: TABLET_MEDIA_QUERY,
      laptop: LAPTOP_MEDIA_QUERY,
      desktop: DESKTOP_MEDIA_QUERY,
    },
  },
};

export const Theming = () => (
  <Global
    styles={css`
      html {
        font-size: 17px;

        ${TABLET_MEDIA_QUERY} {
          font-size: 14px;
        }
      }

      :root {
        --colors-navy: ${navy};
        --colors-red100: ${red100};
        --colors-red200: ${red200};
        --colors-green: ${green100};
        --colors-purple: ${purple};
        --colors-white: ${white};
        --colors-grey100: ${grey100};
        --colors-grey200: ${grey200};
        --colors-grey300: ${grey300};
        --colors-grey400: ${grey400};

        --font-family-data: ${codeFont};
        --font-family-heading: ${headingFont};
        --font-family-body: ${bodyFont};

        --font-size-body: ${bodySize};
        --font-size-table: ${tableSize};
        --font-size-heading: ${headingSize};

        --layout-spacing-small: ${smallSpacing};
        --layout-spacing-medium: ${mediumSpacing};
        --layout-spacing-large: ${largeSpacing};

        --layout-height-small: ${smallHeight};
        --layout-height-medium: ${mediumHeight};
        --layout-height-table-row: ${tableRowHeight};

        --layout-edges-small: ${smallEdges};
        --layout-edges-medium: ${mediumEdges};
      }

      body {
        background: var(--colors-navy);
        margin: 0;
        padding: 0;
        min-height: 100vh;
        max-width: 100vw;
        overflow: overlay;
      }
    `}
  />
);
