import React, { useEffect } from 'react'
import Map from '../component/Map'
import Footer from '../component/Footer'
import HomeDes from './HomeDes'
import Feature from './Feature'
import AboutCard from '../component/AboutCard'
import Gallery from '../component/Gallery'
import { Helmet } from 'react-helmet'

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>
                <Helmet>
        <title>रानी पद्मावती तारा योगतंत्र आदर्श संस्कृत महाविद्यालय | Home</title>
        <meta name="description" content="रानी पद्मावती तारा योगतंत्र आदर्श संस्कृत महाविद्यालय की स्थापना संस्कृत और भारतीय संस्कृति को संरक्षित करने हेतु की गई।"/>
        <meta name="keywords" content="Sanskrit College, Indian Culture, Varanasi, रानी पद्मावती संस्कृत महाविद्यालय" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="रानी पद्मावती तारा योगतंत्र आदर्श संस्कृत महाविद्यालय" />
        <meta property="og:description" content="रानी पद्मावती तारा योगतंत्र आदर्श संस्कृत महाविद्यालय, वाराणसी में स्थित एक प्रतिष्ठित संस्कृत महाविद्यालय है।" />
        <meta property="og:url" content="https://ranipadmawatiasm.in/" />
        <meta property="og:type" content="website" />
      </Helmet>

            <HomeDes/>  
            <AboutCard/>
            <Feature/>
            <Gallery/>
            <Map />
        </div>

    )
}

export default Home
