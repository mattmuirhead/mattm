import {
  Heading1,
  Body,
} from '/components/atoms/Typography'
import { FlexColumn } from '/components/atoms/Layout'
import styled from 'styled-components'

const Gradient = styled.span`
  background: ${props => props.theme.gradients.light};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Home = () => {
  return (
    <FlexColumn maxWidth="500px" m="auto" p={2} textAlign="center">
      <Heading1 mb={3}>
        Matt Muirhead<br/>  
        <Gradient>Software Engineer</Gradient>
      </Heading1>
      <Body>
        Opening statement here that says what I do, maybe something about pixel perfect replication of design.
      </Body>
    </FlexColumn>
  )
}

export default Home
