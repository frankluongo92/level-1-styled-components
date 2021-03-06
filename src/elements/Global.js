import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const GlobalStyle = createGlobalStyle`
  ${normalize()};
  html {
    box-sizing: border-box;
  }

  *, *::after, *::before {
    box-sizing: inherit;
  }

  html, body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
