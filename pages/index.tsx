import type { NextPage } from 'next'
import Head from 'next/head'
import HomeContainer from '../containers/home/home'
import Layout from '../components/layout/layout'

const Home: NextPage = () => {
  return (

    <Layout>
      <Head>
        <title>Kylian Germain Portfolio</title>
        <meta name="description" content={`I am Kylian GERMAIN, passionate about everything that touches new technologies, full-stack developer, specialized in web and mobile and student in 4th year at Epitech Paris.`} />

        <meta itemProp="name" content={'Kylian Germain Portfolio'} />
        <meta itemProp="description" content={`I am Kylian GERMAIN, passionate about everything that touches new technologies, full-stack developer, specialized in web and mobile and student in 4th year at Epitech Paris.`} />
        <meta itemProp="image" content={'https://media-exp1.licdn.com/dms/image/C4E03AQHHDvqR-WPSMQ/profile-displayphoto-shrink_800_800/0/1627891692796?e=1662595200&v=beta&t=la7So89eb31cuk-MUFme8dsu8e8e0kgFkwQlyFzBrtk'} />

        <meta name="og:title" content={'Kylian Germain Portfolio'} />
        <meta name="og:description" content={`I am Kylian GERMAIN, passionate about everything that touches new technologies, full-stack developer, specialized in web and mobile and student in 4th year at Epitech Paris.`} />
        <meta property="og:image" content={'https://media-exp1.licdn.com/dms/image/C4E03AQHHDvqR-WPSMQ/profile-displayphoto-shrink_800_800/0/1627891692796?e=1662595200&v=beta&t=la7So89eb31cuk-MUFme8dsu8e8e0kgFkwQlyFzBrtk'} />
        <meta property="og:url" content={'https://viepest.herokuapp.com'} />
        <meta property="og:type" content="website" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={'Kylian Germain Portfolio'} />
        <meta name="twitter:description" content={`I am Kylian GERMAIN, passionate about everything that touches new technologies, full-stack developer, specialized in web and mobile and student in 4th year at Epitech Paris.`} />
        <meta name="twitter:image" content={'https://media-exp1.licdn.com/dms/image/C4E03AQHHDvqR-WPSMQ/profile-displayphoto-shrink_800_800/0/1627891692796?e=1662595200&v=beta&t=la7So89eb31cuk-MUFme8dsu8e8e0kgFkwQlyFzBrtk'} />
      </Head>
      <HomeContainer />
    </Layout>
  )
}

export default Home
