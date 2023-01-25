import React, { ReactNode } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Stack from '@mui/material/Stack';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { appColors } from '../../theme';
import { DialogTitle } from '@mui/material';

interface AppModalProps {
  onClose?: () => void;
  children?: ReactNode;
  titleComponent?: ReactNode;
  noScrollLock?: boolean;
  loading?: boolean;
  withCloseIcon?: boolean;
  centered?: boolean;
}

const AppModal = (props: AppModalProps) => {
  const {
    onClose,
    children,
    noScrollLock,
    loading,
    withCloseIcon,
    titleComponent
  } = props;

  const handleClose = () => {
    if (loading) return;
    if (onClose) onClose();
  };

  return (
    <Dialog
      scroll="paper"
      disableScrollLock={noScrollLock}
      open
      onClose={handleClose}
      aria-describedby="alert-dialog-description"
      sx={{ marginX: '10px' }}
      PaperProps={{
        sx: {
          borderRadius: '8px',
          minWidth: { xs: '98%', sm: 600 }
          // top: -50
        }
      }}>
      <DialogTitle>
        {titleComponent}
        {withCloseIcon && (
          <IconButton
            onClick={handleClose}
            size="small"
            sx={{
              width: 22,
              height: 22,
              position: 'absolute',
              right: 10,
              top: 10,
              bgcolor: appColors.burgundy,
              '&:hover': {
                bgcolor: appColors.titleGray
              }
            }}>
            <CloseIcon sx={{ fontSize: 16, color: 'white' }} />
          </IconButton>
        )}
      </DialogTitle>
      <Backdrop
        open={Boolean(loading)}
        sx={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: (theme) => theme.zIndex.drawer + 1
        }}>
        <CircularProgress color="primary" />
      </Backdrop>
      <DialogContent>
        <Stack spacing={3} paddingY={1}>
          {children}
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default AppModal;
