import { text } from 'stream/consumers';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  :root {
    --header-height: 120px;
    --container-width: 900px;
    --space-side-header:30px;
    --space-side-section:60px;
  }
  body {
    background: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.text.normal};
  }
  a {
    color: ${({ theme }) => theme.color.text.normal};
    text-decoration:none;
  }`;
