import Banner from '@/components/Banner';
import Section from '@/components/Section';
import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Banner />
      <Section bg={["purple", "lightgray"]}><div>pinga</div><div>pinga</div></Section>
      <Section bg={["purple"]}><div>pinga</div></Section>
    </>
  )
}

export default Home;