import { Action } from 'react-sweet-state';

import type { State } from '../../types';

import { subscribeToOrderBook } from '../subscribe';

export const onInit =
  (): Action<State, {}, void | Promise<void>> =>
  ({ getState, setState, dispatch }) => {
    const { socket } = getState();

    socket.addEventListener('open', () => {
      setState({ connectedToEndpoint: true });
      dispatch(subscribeToOrderBook());
    });

    socket.addEventListener('close', () => {
      setState({ connectedToEndpoint: false });
    });

    socket.addEventListener('error', error => {
      setState({ connectedToEndpoint: false, error });
    });
  };
