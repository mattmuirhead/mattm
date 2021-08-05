import styled, { css } from 'styled-components'
import { color, space } from 'styled-system'

const typographyStyles = css`
  margin: 0;
  line-height: 1.5;
  ${color};
  ${space};
`

const headingStyles = css`
  font-weight: 500;
  color: ${props => props.theme.colors.heading};
  line-height: 1.1;
`

const Heading1 = styled.h1`
  font-size: 54px;  
  ${typographyStyles};
  ${headingStyles};
`
const Heading2 = styled.h2`
  font-size: 42px;  
  ${typographyStyles};
  ${headingStyles};
`
const Heading3 = styled.h3`
  font-size: 36px;  
  ${typographyStyles};
  ${headingStyles};
`
const Heading4 = styled.h4`
  font-size: 30px;  
  ${typographyStyles};
  ${headingStyles};
`
const Heading5 = styled.h5`
  font-size: 24px;  
  ${typographyStyles};
  ${headingStyles};
`
const Body = styled.p`
  font-size: 18px;
  font-weight: 300;
  ${typographyStyles};
`
const Label = styled.label`
  font-size: 12px;
  font-weight: 300;
  ${typographyStyles};
`

export {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Body,
  Label,
}