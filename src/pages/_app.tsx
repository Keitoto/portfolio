import Layout from '@/components/layout/Layout';
import { useDarkMode } from '@/hooks/useDarkMode';
import { GlobalStyle } from '@/styles/GlobalStyles';
import { lightTheme, darkTheme } from '@/styles/Theme';
import type { AppProps } from 'next/app';

import { Roboto_Flex } from 'next/font/google';
import { ThemeProvider } from 'styled-components';

const roboto = Roboto_Flex({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  const [theme, themeToggler,mountedComponent] = useDarkMode();

  if(!mountedComponent) return <div/>
  
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Layout className={roboto.className} onToggleTheme={themeToggler}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
