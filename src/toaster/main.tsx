import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { Container, ToastPortal, Toaster } from './ui';
import { useToasts } from './controllers';

export const Toasts = () => {
  const [{ toasts }, { removeToast }] = useToasts();

  return (
    <ToastPortal>
      <Container>
        {toasts.map(toast => (
          <Toaster toast={toast} onDismiss={removeToast} key={toast.id} />
        ))}
      </Container>
    </ToastPortal>
  );
};
