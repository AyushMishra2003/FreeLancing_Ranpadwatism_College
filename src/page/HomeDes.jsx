import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeDescCard from '../component/HomeDescCard';
import useHomeData from '../hook/useHomeData';
const responsive = {
    0: { items: 1 }
};



const items = useHomeData.map((val, ind) => {
    return (
        <div key={ind + 1} className=''>
            <HomeDescCard img={val.image} />
        </div>
    )
})

const HomeDes = () => (
    <div className=' w-[100%] flex flex-col gap-1 items-center justify-center'>

        <AliceCarousel
            mouseTracking
            autoPlayInterval={2200}
            animationDuration={1800}
            infinite
            disableButtonsControls
            disableDotsControls
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
            autoPlay
        />
    </div>
);


export default HomeDes