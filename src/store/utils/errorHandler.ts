import { AxiosResponse } from 'axios';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../index';
import { setSystemSnackbar } from '../system/actions';

interface ValidationError {
  property: string;
  value: string;
  message: string;
}
interface GenericError {
  message?: string;
}
const errorHandler = (
  e: unknown | Error,
  dispatch: ThunkDispatch<AppState, unknown, AnyAction>,
  autoHide: boolean = true
) => {
  const err = e as {
    response?: AxiosResponse<{ data: Array<ValidationError> | GenericError }>;
  };
  if (err.response && err.response.data) {
    const { data } = err.response;
    if (Array.isArray(data)) {
      let message =
        data[0].message === 'Invalid value'
          ? 'Incorrect username / password.'
          : data[0].message;

      if (data[0].property === 'oldPassword')
        message = 'Incorrect old password.';

      dispatch(setSystemSnackbar({ open: true, type: 'error', message }));
    } else if (typeof data === 'string') {
      // generic error
      dispatch(
        setSystemSnackbar({
          open: true,
          type: 'error',
          message: 'Unknown error. Please contact the administrator'
        })
      );
    } else {
      dispatch(
        setSystemSnackbar({
          open: true,
          type: 'error',
          message: (data as GenericError).message as string
        })
      );
    }
  } else if (e instanceof Error) {
    dispatch(
      setSystemSnackbar({
        open: true,
        type: 'error',
        message: e.message
      })
    );
  }

  if (!autoHide) return;

  setTimeout(() => {
    dispatch(setSystemSnackbar(null));
  }, 3000);
};
export default errorHandler;
