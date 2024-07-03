import React from 'react'

const HomeDescCard = ({ img }) => {

    return (
        <div className=''>
            <div className='relative fill-black'>
                <img src={img} alt="" className='w-[100%] h-[24rem] sm:h-[27rem] lg:h-[30rem] xl:h-[35rem] object-cover' />
                <div className='w-[100%] bg-[#000000a1] h-[24rem] sm:h-[27rem] absolute z-[10] top-0 left-0 lg:h-[30rem] xl:h-[35rem]'></div>
            </div>
        </div>
    )
}

export default HomeDescCard