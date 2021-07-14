import { PageContainer } from 'page-container';
import { OrderBookTable } from 'order-book-table';
import { SocketStateIndicator } from 'order-book-store';
import { FeedFooter } from 'feed-footer';
import { Header } from 'header';
import { Toasts } from 'toaster';

export const App = () => (
  <PageContainer>
    <Header />
    <OrderBookTable />
    <FeedFooter />
    <SocketStateIndicator />
    <Toasts />
  </PageContainer>
);
