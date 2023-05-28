// _app.tsx
import 'tailwindcss/tailwind.css'
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import { Session } from 'next-auth';
import '../styles/globals.css'


const App = ({ Component, pageProps }: AppProps<{
  session: Session;
}>) => (
  <SessionProvider session={pageProps.session}>
    <Component {...pageProps} />
  </SessionProvider>
);

export default App;