import { Action } from 'react-sweet-state';

import type { Group, State } from '../../types';

export const setGroup =
  (group: Group): Action<State> =>
  ({ setState }) => {
    setState({ group });
  };
