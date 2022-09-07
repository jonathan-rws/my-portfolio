import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  html{
    @media(max-width: 1080px){
        font-size: 93.75%;
    }
    @media(max-width: 720px){
        font-size: 87.5%;
    }
}

}
body{

  -webkit-font-smoothing: antialiased;
  background: ${(props) => props.theme.background};
  margin: 0 auto;
  color: ${(props) => props.theme.ligh};
}
body, input-security, textarea, button{
  font-family: 'Poppins', sans-serif;

  
}
`
