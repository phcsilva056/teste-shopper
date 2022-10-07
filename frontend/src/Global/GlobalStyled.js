import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
*{
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
  user-select: none;
}

#root,body{
  max-width: 100vw;
  min-height: 100vh;
}

#root{
  display: flex;
  flex-direction: column;
  background-color: #fbfefd;
}
`;
