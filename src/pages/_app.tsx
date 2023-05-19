import type { AppProps } from 'next/app';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/index.scss';

const App = ({Component, pageProps}: AppProps) => {
  return(
    <>
      <Header />
      <div className="content">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}

export default App;
