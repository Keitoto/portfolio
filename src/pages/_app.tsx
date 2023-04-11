import Layout from '@/components/layout/Layout';
import GlobalStyle from '@/styles/globalStyles';
import type { AppProps } from 'next/app';

import { Roboto_Flex } from 'next/font/google';

const roboto = Roboto_Flex({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout className={roboto.className}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
