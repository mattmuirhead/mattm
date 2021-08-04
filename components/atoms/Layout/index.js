import styled from 'styled-components'
import { space, layout, color, flexbox, border, position, typography } from 'styled-system'

const Box = styled.div`
  ${color}
  ${layout}
  ${space}
  ${flexbox}
  ${border}
  ${position}
  ${typography}
`

const Flex = styled(Box)`
  display: flex;
`

const FlexColumn = styled(Box)`
  display: flex;
  flex-direction: column;
`

export {
  Box,
  Flex,
  FlexColumn,
}
