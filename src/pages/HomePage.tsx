import { Helmet } from 'react-helmet'
import HomeBanner from '../components/HomeBanner'
import HomePlaying from '../components/HomePlaying'
import HomePopular from '../components/HomePoular'



const HomePage = () => {
  return (
    <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Movies Website</title>
          <link rel="canonical" href="http://localhost:5173/" />
          <meta name="description" content="Movies Website" />
        </Helmet>
        <HomeBanner />
        <HomePopular />
        <HomePlaying />
    </>
  )
}

export default HomePage