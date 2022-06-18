import React, { useEffect, Suspense } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import ModalError from './components/ModalError/ModalError';
import { Navigation } from './components/Navigation';
import { clearError } from './redux/states/ErrorSlice';
import theme from './theme';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearError());
  }, [dispatch])

  return (
    <>
      <CssBaseline />
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <ModalError />
          <Suspense fallback={<div>Loading ...</div>}>
            <BrowserRouter>
              <Navigation />
            </BrowserRouter>
          </Suspense>
        </ThemeProvider>
      </React.StrictMode>
    </>
  );
}

export default App;
