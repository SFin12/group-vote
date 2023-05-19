// _app.tsx

import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import { Session } from 'next-auth';


const App = ({ Component, pageProps }: AppProps<{
  session: Session;
}>) => (
  <SessionProvider session={pageProps.session}>
    <Component {...pageProps} />
  </SessionProvider>
);

export default App;