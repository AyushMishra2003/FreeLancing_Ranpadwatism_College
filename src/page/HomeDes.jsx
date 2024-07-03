import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom';
import HomeDescCard from '../component/HomeDescCard';
import useHomeData from '../hook/useHomeData';
import Typewriter from '../component/TypeWriter';

const responsive = {
    0: { items: 1 },
};

const items = useHomeData.map((val, ind) => (
    <div key={ind + 1} className=''>
        <HomeDescCard img={val.image} />
    </div>
));

const Hero = () => (
    <div className='relative w-full flex flex-col items-center justify-center '>
        <AliceCarousel
            // mouseTracking
            autoPlayInterval={2200}
            animationDuration={1800}
            infinite
            disableButtonsControls
            disableDotsControls
            items={items}
            responsive={responsive}
            controlsStrategy='alternate'
            autoPlay
        />
        {/* <div className='absolute flex flex-col items-center justify-center text-center top-1/2 transform -translate-y-1/2 text-white w-full px-4'>
            <h2 className='sm:text-4xl text-3xl font-bold lg:text-3xl mb-6 lg:w-3/5'>
                <Typewriter text='रानी पद्मावती तारा योगतंत्र आदर्श संस्कृत महाविद्यालय इंद्रपुर, शिवपुर, वाराणसी पिन कोड - 221003' />
            </h2>
        </div> */}
    </div>
);

export default Hero;
