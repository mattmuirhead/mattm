import styled, { css } from 'styled-components'
import { space } from 'styled-system'

const primaryStyles = css`
  background: ${props => props.theme.colors.highlight};
  background: ${props => props.theme.gradients.light};
  color: ${props => props.theme.colors.textInvert};
  font-weight: 600;
  padding: 8px 16px;
`
const secondaryStyles = css`
  background: transparent;
  border: 2px solid ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.secondary};
  font-weight: 600;
  padding: 8px 16px;
`

const Button = styled.button`
  appearance: none;
  border: 0;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
  background: transparent;
  color: ${props => props.theme.colors.text};
  padding: 0;
  ${props => props.type === 'primary' && primaryStyles};
  ${props => props.type === 'secondary' && secondaryStyles};

  @media (min-width: 700px) {
    font-size: 16px;
  }

  ${space};
`

export default Button
