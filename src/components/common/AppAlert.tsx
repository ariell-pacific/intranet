import React from 'react';
import Alert, { AlertColor } from '@mui/material/Alert';
import Snackbar, { SnackbarProps } from '@mui/material/Snackbar';
import { appColors } from '../../theme';

type AMIAlertProps = {
  message?: string;
  type?: AlertColor;
};

const colorMap: Record<AlertColor, string> = {
  success: appColors.success,
  error: appColors.error,
  warning: appColors.warning,
  info: appColors.warning
};

const AppAlert = ({
  message,
  type = 'error',
  ...snackProps
}: AMIAlertProps & SnackbarProps): JSX.Element => {
  const bgcolor = colorMap[type];
  return (
    <Snackbar
      autoHideDuration={3000}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      key="topright"
      {...snackProps}>
      <Alert
        variant="filled"
        sx={{ bgcolor, paddingY: '10px' }}
        severity={type}
        elevation={6}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AppAlert;
