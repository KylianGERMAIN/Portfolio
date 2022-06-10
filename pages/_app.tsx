import '../styles/globals.css'
import Head from 'next/head'

interface Props {
  Component: any
  pageProps: any
}

function MyApp({ Component, pageProps }: Props) {
  return (
    <>
      <Head>
        <meta content='' name='description' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
