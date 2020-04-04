import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    width: 100vw;
    text-rendering: optimizeLegibility;
     font-family: 'Baloo Thambi 2', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #fafafa;
  }
  
  a {
    -webkit-tap-highlight-color: #f6f6f642;
  }
`;
