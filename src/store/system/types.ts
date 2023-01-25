import { AlertColor } from '@mui/material/Alert';

export type SystemInputType = string | number | boolean;

export interface SystemInputInterface<T> {
  [key: string]: T;
}

export interface SnackBar {
  open: boolean;
  message: string;
  type: AlertColor;
}

export interface SystemState {
  snackbar: SnackBar | null;
  redirectTo: string;
  interceptors: {
    requestId: number;
    responseId: number;
  };
  openDrawer: boolean;
  activeRoute: string;
}

export const SET_SYSTEM_STATE = 'set_system_state';
export const SET_SYSTEM_SNACKBAR = 'set_system_snackbar';

export interface SetSystemStateAction {
  type: typeof SET_SYSTEM_STATE;
  payload: SystemInputInterface<SystemInputType>;
}

export interface SetSystemSnackbarAction {
  type: typeof SET_SYSTEM_SNACKBAR;
  payload: { snackbar: SnackBar | null };
}
export type SystemAction = SetSystemStateAction | SetSystemSnackbarAction;
