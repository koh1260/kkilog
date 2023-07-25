import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  p {
    margin: 0;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }

  body {
    margin: 0%;
    height: 100vh;
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