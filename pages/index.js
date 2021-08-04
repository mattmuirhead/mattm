import styled from 'styled-components'

const Test = styled.div`
  color: ${(props) => props.theme.colors.red};
`

const Home = () => {
  return (
    <>
      <Test>Hello World</Test>
    </>
  )
}

export default Home
