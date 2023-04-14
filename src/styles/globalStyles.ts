import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  body {
    margin: 0;
    padding: 0;
    background: blue;
  }
`;

export default GlobalStyle;
