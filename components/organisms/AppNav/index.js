import { Flex } from '../../atoms/Layout'
import Button from '../../atoms/Button'
import { Heading6 } from '../../atoms/Typography'
import styled from 'styled-components'

const NavWrapper = styled(Flex)`
  background: ${props => props.theme.colors.background};
  background: ${props => props.theme.gradients.dark};
`

const Nav = styled.nav`
  display: flex;
`

const AppNav = () => {
  return (
    <NavWrapper 
      p={3} 
      justifyContent="space-between" 
      position="fixed" 
      top={0} 
      left={0} 
      width={1}
    >
      <Heading6>
        Matt Muirhead <br/>
        Software Engineer
      </Heading6>
      <Nav>
        <Button>Work</Button>
        <Button ml={3}>About</Button>
        <Button ml={3}>Contact</Button>
      </Nav>
    </NavWrapper>
  )
}

export default AppNav
