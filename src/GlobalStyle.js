import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  body {
    font-family: "Poppins", sans-serif;
  }
    
  *, ::after, ::before {
    box-sizing: inherit;
  }
`;