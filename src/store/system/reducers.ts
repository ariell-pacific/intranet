import {
  SET_SYSTEM_STATE,
  SystemState,
  SystemAction,
  SET_SYSTEM_SNACKBAR
} from './types';

const INITIAL_STATE: SystemState = {
  snackbar: null,
  redirectTo: '',
  interceptors: { requestId: -1, responseId: -1 },
  openDrawer: false,
  activeRoute: 'Home'
};

const systemReducers = (
  state = INITIAL_STATE,
  action: SystemAction
): SystemState => {
  switch (action.type) {
    case SET_SYSTEM_STATE:
      return { ...state, ...action.payload };
    case SET_SYSTEM_SNACKBAR:
      return { ...state, snackbar: action.payload.snackbar };
    default:
      return state;
  }
};

export default systemReducers;
