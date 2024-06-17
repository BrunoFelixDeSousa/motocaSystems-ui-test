import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.dark};
    color: ${(props) => props.theme['cinza-300']};
    --webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 500;
  }

  a {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
  }


`
