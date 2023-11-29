import { NextPage } from 'next';
import Banner from '@/sections/Banner';
import AboutMe from '@/sections/AboutMe';
import TechnicalSkills from '@/sections/TechnicalSkills';
import Timeline from '@/sections/Timeline';
import Projects from '@/sections/Projects';
import References from '@/sections/References';

const Home: NextPage = () => {
  return (
    <>
      <Banner/>
      <AboutMe />
      <TechnicalSkills />
      <Timeline />
      <Projects />
      <References />
    </>
  )
}

export default Home;