import Stack from '@mui/material/Stack';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LinksBody from './components/quickLinks/LinksBody';
import AppAlert from './components/common/AppAlert';
import AppLoadingIndicator from './components/common/AppLoadingIndicator';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import { fetchLink } from './store/links/actions';
import { getLinksState } from './store/links/selectors';
import { selectSnackbarState } from './store/system/actions';
const App = () => {
  const snackbar = useSelector(selectSnackbarState);
  const { status } = useSelector(getLinksState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLink());
  }, [dispatch]);
  return (
    <>
      <Stack position="relative">
        <Header />
        {status === "loading" ? <AppLoadingIndicator show={status === 'loading'} /> : <LinksBody />}
        <Footer />
      </Stack>
      <AppAlert
        open={snackbar?.open}
        message={snackbar?.message}
        type={snackbar?.type}
      />
    </>
  );
};

export default App;
