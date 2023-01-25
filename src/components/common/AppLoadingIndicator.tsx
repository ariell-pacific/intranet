import ReactDOM from 'react-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

type AppLoadingIndicatorProps = {
  show: boolean;
};

const AppLoadingIndicator = ({ show }: AppLoadingIndicatorProps) => {
  return ReactDOM.createPortal(
    <Backdrop
      open={show}
      sx={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: (theme) => theme.zIndex.modal + 1
      }}>
      <CircularProgress color="primary" />
    </Backdrop>,
    document.getElementById('loader') as HTMLElement
  );
};

export default AppLoadingIndicator;
