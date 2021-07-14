import { useEffect, useRef } from 'react';

import { useToasts } from 'toaster/controllers';
import { useErrorState, useCurrencySubscriptionState } from '../../controllers';

const usePrevious = <Type,>(value: Type): Type | undefined => {
  const ref = useRef<Type>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export const SocketStateIndicator = () => {
  const [, { addToast }] = useToasts();
  const [{ error }] = useErrorState();
  const [{ currency, subscribedToCurrency }] = useCurrencySubscriptionState();
  const previousConnectionStatus = usePrevious(subscribedToCurrency);

  useEffect(() => {
    if (
      previousConnectionStatus != null &&
      subscribedToCurrency &&
      previousConnectionStatus !== subscribedToCurrency
    ) {
      addToast({
        type: 'success',
        text: `Subscribed to updates for ${currency}`,
        autoDismiss: true,
      });
    }
  }, [currency, previousConnectionStatus, subscribedToCurrency]);

  useEffect(() => {
    if (error) {
      addToast({
        type: 'warning',
        text: 'Something went wrong gathering data',
        autoDismiss: false,
      });
    }
  }, [error]);

  return null;
};
