import Banner from '@/components/Banner';
import Section from '@/components/Section';
import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Banner />
      <Section bg={["purple", "gray"]}><div>test</div><div>test</div></Section>
    </>
  )
}

export default Home;