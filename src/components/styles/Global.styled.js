import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

  *{
      box-sizing: border-box;
  }
  body {
      margin: 0;
      font-family: 'Poppins', sans-serif;
      background-color: ${({ theme }) => theme.colors.body};
      color: hsl(192,100%,9%);
      font-size: 1.15em;
  }
  p{
      opacity: 0.6;
      line-height: 1.5;
  }
  img{
      max-width: 100%
  }
`