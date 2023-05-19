import type { AppProps } from 'next/app';
import '@/styles/index.scss';

const Section = ({Component, pageProps}: AppProps) => {
  return(
    <>
      <Component {...pageProps} />
    </>
  )
}

export default Section;