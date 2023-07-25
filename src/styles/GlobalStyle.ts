import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ul {
    list-style: none;
    padding: 0;
  }

  body {
    margin: 0%;
  }

  html {
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  video {
    max-width: 100%;
    height: auto;
  }

  iframe {
    border: 0;
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  th {
    padding: 0;
  }
`;
export default GlobalStyle;