import {
  useOrderBookActions,
  useErrorState,
  forceThrow,
  cancelForceThrow,
} from 'order-book-store';
import { Button } from 'platform/design-system/components/button';

import { Footer } from './ui';

export const FeedFooter = () => {
  const [, { restartFeed }] = useOrderBookActions();
  const [{ error }] = useErrorState();

  return (
    <Footer>
      <Button
        onclick={() => restartFeed({ shouldToggleFeed: true })}
        type="secondary"
      >
        Toggle Feed
      </Button>
      <Button
        onclick={
          error
            ? () => {
                cancelForceThrow();
                restartFeed({ shouldToggleFeed: false });
              }
            : forceThrow
        }
        type="primary"
      >
        {error ? 'Restart feed' : 'Kill Feed'}
      </Button>
    </Footer>
  );
};
