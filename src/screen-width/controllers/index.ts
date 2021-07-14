import {
  Action,
  createStore,
  createContainer,
  createHook,
} from 'react-sweet-state';

import type { State } from './types';
import { screenWidthToEnum } from './utils';

const initialState: State = {
  screen: screenWidthToEnum(window.innerWidth),
};

const onInit =
  (): Action<State, {}, void | Promise<void>> =>
  ({ setState }) => {
    const windowResizeListener = () => {
      requestAnimationFrame(() => {
        const newScreenSize = screenWidthToEnum(window.innerWidth);
        setState({ screen: newScreenSize });
      });
    };

    window.addEventListener('resize', windowResizeListener);
  };

const actions = {};

type Actions = typeof actions;

const Store = createStore<State, Actions>({
  initialState,
  actions,
});

export const useScreenWidth = createHook(Store);

export const ScreenWidthListenerContainer = createContainer<State, Actions, {}>(
  Store,
  {
    onInit,
  },
);
