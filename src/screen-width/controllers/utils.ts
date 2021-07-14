import {
  MOBILE_SIZE,
  TABLET_SIZE,
  LAPTOP_SIZE,
} from 'platform/design-system/theme/layout/screen-sizes';

import type { ScreenWidth } from './types';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from './constants';

export const screenWidthToEnum = (width: number): ScreenWidth => {
  if (width < MOBILE_SIZE) {
    return MOBILE;
  }

  if (width < TABLET_SIZE) {
    return TABLET;
  }

  if (width < LAPTOP_SIZE) {
    return LAPTOP;
  }

  return DESKTOP;
};
