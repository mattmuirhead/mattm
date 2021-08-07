import {
  Heading1,
  Body,
} from '../../atoms/Typography'
import { FlexColumn, Flex } from '../../atoms/Layout'
import Button from '../../atoms/Button'
import styled from 'styled-components'

const Gradient = styled.span`
  background: ${props => props.theme.gradients.light};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Hero = () => {
  return (
    <Flex minHeight="100vh" width={1} alignItems="center">
      <FlexColumn maxWidth="500px" m="auto" p={2} textAlign="center">
        <Heading1 mb={3}>
          Matt Muirhead<br/>  
          <Gradient>Software Engineer</Gradient>
        </Heading1>
        <Body>
          Opening statement here that says what I do, maybe something about pixel perfect replication of design.
        </Body>

        <Flex justifyContent="center" mt={4}>
          <Button type="primary" mx={2}>Primary Button</Button>
          <Button type="secondary" mx={2}>Secondary Button</Button>
        </Flex>
      </FlexColumn>
    </Flex>
  )
}

export default Hero
