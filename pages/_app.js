import { ThemeProvider } from 'styled-components'
import theme from '../components/theme'

const app = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default app
