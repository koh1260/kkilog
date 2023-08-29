import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard-Regular';
    font-weight: 400;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
  }

  * {
    /* font-family: 'Pretendard-Regular', sans-serif; */
    font-family: 'Nunito', sans-serif;
  }

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
    background-color: #F8F9FA;
    margin: 0%;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  body.open-modal {
    overflow: hidden;
  }

  html {
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
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

  h1 {
    font-size: 2rem;
    margin: 0
  }

  h2 {
    font-size: 1.8rem;
    margin: 0
  }

  h3 {
    font-size: 1.5rem;
    margin: 0;
  }

  h4 {
    margin: 0;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }

  input {
    outline: none;
  }

  textarea {
    resize: none;
    outline: none;
  }
`;
export default GlobalStyle;