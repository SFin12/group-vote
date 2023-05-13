// _app.tsx

import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';


interface Props extends AppProps {
  pageProps: {
    session: any;
  }
}

const App = ({ Component, pageProps }: Props) => (
  <SessionProvider session={pageProps.session}>
    <Component {...pageProps} />
  </SessionProvider>
);

export default App;