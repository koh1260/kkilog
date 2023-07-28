import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none;
    color: black;
  }

  p {
    margin: 0;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }

  body {
    margin: 0%;
    height: 100%;
  }

  html {
    box-sizing: border-box;
    height: 100vh;
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

  h3 {
    margin: 0;
  }

  h4 {
    margin: 0;
  }

  button {
    cursor: pointer;
  }

  textarea {
    resize: none;
  }
`;
export default GlobalStyle;