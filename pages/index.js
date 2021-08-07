import Hero from '/components/organisms/Hero'
import { FlexColumn } from '/components/atoms/Layout'

const Home = () => {
  return (
    <FlexColumn width={1}>
      <Hero />
      <div style={{ height: '600px', width: '100%', background: 'red' }} />
    </FlexColumn>
  )
}

export default Home
