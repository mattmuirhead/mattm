import styled, { css } from 'styled-components'
import { space } from 'styled-system'

const primaryStyles = css`
  background: ${props => props.theme.colors.highlight};
  background: ${props => props.theme.gradients.light};
  padding: 8px 16px;
`
const secondaryStyles = css`
  background: transparent;
  border: 1px solid ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.secondary};
  padding: 8px 16px;
`

const Button = styled.button`
  appearance: none;
  border: 0;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;
  font-weight: 600;
  ${props => props.type === 'primary' && primaryStyles};
  ${props => props.type === 'secondary' && secondaryStyles};
  ${space};
`

export default Button
