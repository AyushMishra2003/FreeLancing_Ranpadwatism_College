import React from 'react'
import useFeatureData from '../hook/useFeatureData'
import FeatureCard from '../component/FeatureCard'

const Feature = () => {
    return (
        <div className='flex flex-wrap items-center justify-center p-4 gap-10 bg-[#ffffff]'>
            {useFeatureData.map((val)=><FeatureCard title={val.title} image={val.img} link={val.link}/>)}

        </div>
    )
}

export default Feature