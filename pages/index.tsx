import type { NextPage } from 'next'
import Head from 'next/head'
import HomeContainer from '../containers/home/home'
import Layout from '../components/layout/layout'

const Home: NextPage = () => {
  return (

    <Layout>
      <Head>
        <title>Kylian Germain Portfolio</title>
      </Head>
      <HomeContainer />
    </Layout>
  )
}

export default Home
