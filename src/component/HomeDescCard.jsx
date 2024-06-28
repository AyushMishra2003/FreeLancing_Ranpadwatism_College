import React from 'react'

const HomeDescCard = ({ img}) => {

    return (
        <div className=''>
            <div className=''>
                <img src={img} alt="" className='w-[100%] ' />
            </div>
            {/* <div className='absolute lg:bottom-[-3rem] p-[3rem] lg:left-[7rem] left-[0rem] bg-[#72B904] text-white px-[2rem] lg:pr-[10rem] pr-[12rem] flex flex-col gap-[3rem] items-start  bottom-[2rem] sm:bottom-[5rem] sm:pr-[9rem]  sm:left-[2rem]'>
                <div className='flex flex-col gap-3 rounded-md'>
                    <p className='text-[1.5rem] font-bold lg:w-[32rem] w-[17rem] sm:w-[25rem] md:w-[30rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quia!</p>
                    <p className='lg:w-[30rem] w-[17rem] sm:w-[25rem] md:w-[30rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos rem maxime delectus enim odio fuga modi saepe, laborum tempora quo.</p>
                </div>
                <button className='border border-white rounded-sm p-[0.4rem] px-[3rem] hover:bg-white hover:text-[#72b904] ease-in duration-300'>Learn More</button>
            </div> */}
        </div>      
    )
}

export default HomeDescCard