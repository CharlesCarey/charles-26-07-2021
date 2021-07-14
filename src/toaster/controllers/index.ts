import { Action, createStore, createHook } from 'react-sweet-state';
import { v4 as uuidv4 } from 'uuid';

import type { Toast, ToastWithId } from '../types';
import { AUTO_DISMISS_THRESHOLD } from './constants';

type State = {
  toasts: ToastWithId[];
};

const initialState: State = {
  toasts: [],
};

const removeToast =
  (toast: ToastWithId): Action<State> =>
  ({ getState, setState }) => {
    const { toasts } = getState();
    const index = toasts.findIndex(({ id }) => id === toast.id);

    if (index > -1) {
      toasts.splice(index, 1);
    }

    setState({ toasts: [...toasts] });
  };

const addToast =
  (toast: Toast): Action<State> =>
  ({ getState, setState, dispatch }) => {
    const { toasts } = getState();
    const toastWithId = {
      ...toast,
      id: uuidv4(),
    };
    setState({ toasts: [toastWithId].concat(toasts) });

    if (toast.autoDismiss) {
      setTimeout(
        () => dispatch(removeToast(toastWithId)),
        AUTO_DISMISS_THRESHOLD,
      );
    }
  };

const actions = {
  addToast,
  removeToast,
};

type Actions = typeof actions;

const Store = createStore<State, Actions>({
  initialState,
  actions,
});

export const useToasts = createHook(Store);
