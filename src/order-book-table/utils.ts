import { ScreenWidth, MOBILE, TABLET } from 'screen-width';

export const isScreenMobile = (screen: ScreenWidth) =>
  screen === MOBILE || screen === TABLET;
