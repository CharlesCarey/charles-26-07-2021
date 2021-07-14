import { MOBILE, DESKTOP, LAPTOP, TABLET } from './constants';

export type ScreenWidth =
  | typeof MOBILE
  | typeof TABLET
  | typeof LAPTOP
  | typeof DESKTOP;

export type State = {
  screen: ScreenWidth;
};
