import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.font};
  }
`

export default GlobalStyle
