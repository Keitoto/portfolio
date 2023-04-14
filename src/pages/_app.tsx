import Layout from '@/components/layout/Layout';
import { GlobalStyle } from '@/styles/GlobalStyles';
import { lightTheme, darkTheme } from '@/styles/Theme';
import type { AppProps } from 'next/app';

import { Roboto_Flex } from 'next/font/google';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

const roboto = Roboto_Flex({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('dark');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Layout className={roboto.className} onToggleTheme={themeToggler}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
