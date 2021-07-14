import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

const portalNode = document.getElementById('portal');

type ToastContainerProps = {
  children: ReactNode;
};

export const ToastPortal = ({ children }: ToastContainerProps) =>
  portalNode && createPortal(children, portalNode);
