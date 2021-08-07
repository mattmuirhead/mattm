import Hero from '/components/organisms/Hero'
import { FlexColumn } from '/components/atoms/Layout'
import AppNav from '/components/organisms/AppNav'

const Home = () => {
  return (
    <FlexColumn width={1}>
      <AppNav />
      <Hero />
      <div style={{ height: '600px', width: '100%' }} />
    </FlexColumn>
  )
}

export default Home
