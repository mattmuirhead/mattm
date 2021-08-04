import styled, { css } from 'styled-components'
import { color, space } from 'styled-system'

const typographyStyles = css`
  margin: 0;
  ${color}
  ${space}
`

const Heading1 = styled.h1`
  font-size: 60px;  
  ${typographyStyles}
`
const Heading2 = styled.h2`
  font-size: 42px;  
  ${typographyStyles}
`
const Heading3 = styled.h3`
  font-size: 36px;  
  ${typographyStyles}
`
const Heading4 = styled.h4`
  font-size: 30px;  
  ${typographyStyles}
`
const Heading5 = styled.h5`
  font-size: 24px;  
  ${typographyStyles}
`
const Body = styled.p`
  font-size: 16px;  
  ${typographyStyles}
`
const Label = styled.label`
  font-size: 12px;  
  ${typographyStyles}
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