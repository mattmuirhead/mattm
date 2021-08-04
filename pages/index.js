import {
  Heading1,
  Heading2,
} from '/components/atoms/Typography'
import { FlexColumn } from '/components/atoms/Layout'

const Home = () => {
  return (
    <FlexColumn textAlign="center">
      <Heading1>Matt Muirhead</Heading1>
      <Heading2>Software Engineer</Heading2>
    </FlexColumn>
  )
}

export default Home
