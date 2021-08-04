import { ThemeProvider } from 'styled-components'
import theme from '../components/theme'
import GlobalStyle from '../components/GlobalStyle'
import Head from 'next/head'

const app = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Matt Muirhead</title>
        <meta name="description" content="Matt Muirhead - Portfolio Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default app
