import { AppState } from '../index';
import {
  SET_SYSTEM_STATE,
  SystemInputInterface,
  SystemInputType,
  SystemAction,
  SnackBar,
  SET_SYSTEM_SNACKBAR
} from './types';

export const setSystemState = (
  newState: SystemInputInterface<SystemInputType>
): SystemAction => ({
  type: SET_SYSTEM_STATE,
  payload: newState
});

export const systemRedirect = (to: string): SystemAction => ({
  type: SET_SYSTEM_STATE,
  payload: { redirectTo: to }
});

export const setSystemSnackbar = (snackbar: SnackBar | null): SystemAction => ({
  type: SET_SYSTEM_SNACKBAR,
  payload: { snackbar }
});

// selectors
export const selectSnackbarState = (state: AppState) => state.system.snackbar;
