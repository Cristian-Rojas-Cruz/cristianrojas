import { NextPage } from 'next';
import { Html, Head, Main, NextScript } from 'next/document'

const Document: NextPage = () => {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>cristianrojas</title>
        <meta name="description" content="Cristian Rojas portfolio"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;