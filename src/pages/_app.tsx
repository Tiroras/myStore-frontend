import '@/styles/globals.scss';
import theme from '@/utils/theme';
import { ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import AuthProvider from 'providers/auth/AuthProvider';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'store';
import { TypeComponentAuthFields } from 'types/auth.types';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

export default function App({
  Component,
  pageProps
}: AppProps & TypeComponentAuthFields) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthProvider Component={{ isOnlyUser: Component.isOnlyUser }}>
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
            </ThemeProvider>
          </AuthProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}
