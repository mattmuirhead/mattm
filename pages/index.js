import Head from 'next/head'
import styled from 'styled-components'

const Test = styled.div`
  color: ${({ theme }) => theme.colors.red};
`

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Test>Hello World</Test>
    </>
  )
}

export default Home
