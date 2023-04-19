import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  :root {
    font-size: 62.5%; // 1rem = 10px
    --header-height: 10rem;
    --container-width: 90rem;
    --space-side-header:3rem;
    --space-side-section:6rem;
  }
  html {
    font-size: 62.5%;
  }
  body{
    font-size: 1.6rem;
  }
  /* body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, menu, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    font-size: inherit;
  } */
 
  body {
    background: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.text.normal};
  }
  a {
    color: ${({ theme }) => theme.color.text.normal};
    text-decoration:none;
  }`;
