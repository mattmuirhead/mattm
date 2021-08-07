import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${props => props.theme.colors.background};
    background: ${props => props.theme.gradients.dark};
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.font};
    min-height: 100vh;
  }

  #__next {
    min-height: 100vh;
    display: flex;
  }
`

export default GlobalStyle
