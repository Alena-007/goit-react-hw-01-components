import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #FFF5EE;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }
  ul,
  ol {
    list-style: none;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-left: 0px;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  a {
    text-decoration: none;
  }
`;
