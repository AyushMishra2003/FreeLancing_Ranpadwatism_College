import React, { useEffect } from 'react'
import Map from '../component/Map'
import Footer from '../component/Footer'
import HomeDes from './HomeDes'
import Feature from './Feature'
import AboutCard from '../component/AboutCard'
import Gallery from '../component/Gallery'

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>
            <HomeDes/>  
            <AboutCard/>
            <Feature/>
            <Gallery/>
            <Map />
        </div>

    )
}

export default Home
