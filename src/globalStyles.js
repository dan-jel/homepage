import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    h1{
      font-size: 26px;
    }
    h2{
      font-size: 22px;
    }
    p{
      font-size: 16px;
    }
  }
`;

export default GlobalStyle;
