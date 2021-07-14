import type { ReactNode } from 'react';

import { ScreenWidthListenerContainer } from 'screen-width';
import { OrderBookStoreContainer } from 'order-book-store';
import { Theming } from 'platform/design-system/theme';

type PageContainerProps = {
  children: ReactNode;
};

export const PageContainer = ({ children }: PageContainerProps) => (
  <ScreenWidthListenerContainer>
    <OrderBookStoreContainer>
      <Theming />
      {children}
    </OrderBookStoreContainer>
  </ScreenWidthListenerContainer>
);
