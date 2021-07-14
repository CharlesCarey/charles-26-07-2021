export type Toast = {
  type: 'success' | 'warning';
  text: string;
  autoDismiss: boolean;
};

export type ToastWithId = Toast & { id: string };
