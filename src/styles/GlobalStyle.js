import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-width: 320px;
    background: ${({ theme }) => theme.colors.cream};
    color: ${({ theme }) => theme.colors.ink};
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    line-height: 1.45;
  }

  button,
  input,
  textarea {
    font: inherit;
  }

  button {
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  main {
    min-height: calc(100vh - 264px);
  }

  .container {
    width: min(100% - 32px, ${({ theme }) => theme.layout.container});
    margin: 0 auto;
  }
`

export default GlobalStyle
