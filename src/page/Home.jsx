import React from 'react'
import Map from '../component/Map'
import Footer from '../component/Footer'
import HomeDes from './HomeDes'
import Feature from './Feature'
import AboutCard from '../component/AboutCard'
import Gallery from '../component/Gallery'

const Home = () => {
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
