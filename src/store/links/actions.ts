import { apiClient } from '../../utils/api';
import { AppThunk } from '../index';
import errorHandler from '../utils/errorHandler';
import {
  LinkAction,
  LinksState,
  LOAD_LINK_DATA,
  SET_LINK_STATUS, CALL_LINK_API, SET_LINK_STATUS_FAILED,
} from './type';

// SYNC ACTIONS
const loadLinkData = (
  data: LinksState['data']
): LinkAction => ({
  type: LOAD_LINK_DATA,
  payload: {
    data
  }
});

export const setLoadStatus = (): LinkAction => {
  return{
  type: CALL_LINK_API
  }
};

export const setLinkStatus = (): LinkAction => {
  return {
    type: SET_LINK_STATUS
  };
};

export const callAuthFailed = (err: string | null): LinkAction => {
  return {
    type: SET_LINK_STATUS_FAILED,
    payload: err
  };
};


// ASYNC ACTIONS
export const fetchLink = (): AppThunk => async (dispatch) => {
  dispatch(setLoadStatus());
  try {
      const feedback = await apiClient.request({
      url: 'PCSystemsAPI/Api/Maintenance/Helpdesk/Links/Get'
    });
    dispatch(loadLinkData(feedback.data[`hdLinks`]));
    dispatch(setLinkStatus());
  }  catch (err: any) {
    dispatch(callAuthFailed(err.message));
    errorHandler(err, dispatch);
  }
};
