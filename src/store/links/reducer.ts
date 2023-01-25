import {
  CALL_LINK_API,
  LinkAction,
  LinksState,
  LOAD_LINK_DATA,
  SET_LINK_STATUS,
  SET_LINK_STATUS_FAILED,
} from './type';

const initialState: LinksState = {
  status: 'idle',
  error: null,
  data: []
};

const linksReducer = (
  state = initialState,
  action: LinkAction
): LinksState => {
  switch (action.type) {
    case CALL_LINK_API:
      return { ...state, status: 'loading' };
    case SET_LINK_STATUS:
      return { ...state, status: 'success' };
    case SET_LINK_STATUS_FAILED:
      return { ...state, status: 'failed', error: action.payload };
    case LOAD_LINK_DATA:
      return { ...state, data: action.payload.data };
    default:
      return state;
  }
};

export default linksReducer;
