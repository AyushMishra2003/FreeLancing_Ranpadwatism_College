import React from 'react'
import {
    BsFacebook,
    BsInstagram,
    BsLinkedin,
    BsTwitter,
    BsWhatsapp
} from 'react-icons/bs'

import { MdKeyboardDoubleArrowRight, MdOutlineSmartphone } from "react-icons/md";
import { CiClock1 } from "react-icons/ci";
import { IoMdMail } from "react-icons/io";

import { Link } from 'react-router-dom'
import { FaLocationDot } from 'react-icons/fa6';
import logo from '../assets/headerImage/logo1.png'


const Footer = () => {

    const listStyle = "text-[0.95rem] hover:pl-2 flex items-center gap-1 hover:bg-clip-text hover:text-transparent hover:bg-[linear-gradient(to_right,#35C8F2,#27B872)] font-semibold  text-[#C5C5C5] transition-all duration-300 ease-in-out"
    const contactStyle = "text-[0.95rem] flex items-start sm:items-center lg:items-start gap-1 hover:bg-clip-text hover:text-transparent hover:bg-[linear-gradient(to_right,#35C8F2,#27B872)] font-semibold  text-slate-300 "

    const year = new Date().getFullYear()



    return (
        <footer className='text-white bg-[#212121] bg-main '>
            <div className='flex  relative flex-col xl:flex-row p-[2.5rem_1rem] md:p-[2.5_5rem] gap-8 xl:justify-around'>
                <div className='flex flex-col gap-2'>
                    <div className='mb-3'><img className='w-[5rem]' alt="" src={logo} /></div>
                    <p className='leading-6 xl:w-[23rem] w-full text-[#C5C5C5]'>रानी पद्मावती तारा योगतंत्र आदर्श संस्कृत महाविद्यालय की स्थापना स्वर्गीय पंडित कृष्ण मोहन ठाकुर ने भारतीय संस्कृति और संस्कृत भाषा को बढ़ावा देने और संरक्षित करने के लिए 1981 में नेपाली खपरा, वाराणसी में की थी। इस महाविद्यालय की स्थापना कामेश्वर सिंह संस्कृत विश्वविद्यालय, दरभंगा, बिहार के तत्कालीन कुलपति प्रो. जयमंत मिश्रा की अध्यक्षता में हुई थी।</p>
                    {/* <div className='flex gap-4 mt-3'>
                        <Link to={"/"} target='blank' className='text-[20px]'><BsLinkedin  className='text-white'/></Link>
                        <Link to={"https://www.facebook.com/envirfoods/"} target='blank'   className='text-[20px]'><BsFacebook className='text-white' /></Link>
                        <Link to={"/"}  className='text-[20px]'><BsWhatsapp  className='text-white'/></Link>
                        <Link to={"https://www.instagram.com/envirfoods?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="} target='blank' className='text-[20px]'><BsInstagram className='text-white'/></Link>
                        <Link  to={"/"} className='text-[20px]'><BsTwitter className='text-white' /></Link>
                    </div> */}
                </div>
                <div className='flex flex-col justify-between gap-8  md:gap-6 md:flex-row xl:gap-[2rem] '>
                    <div className='flex flex-col w-[80vw] md:w-[60%] gap-8 sm:flex-row sm:justify-between md:gap-6 lg:gap-7'>
                        <div className='w-[80vw] sm:w-[50%] md:w-[14rem]'>
                            <div>
                                <p className='text-[1.09rem] font-[600]'>रानी पद्मावती तारा योगतंत्र आदर्श संस्कृत महाविद्यालय</p>
                                <p className='w-[80vw] sm:w-[80%] md:w-[12rem] lg:w-[15rem] m-[9px_0] h-[3.4px] bg-[#ffff] rounded-md'></p>
                            </div>
                            <div className='flex flex-col gap-4 mt-6 text-[#C5C5C5] '>
                                <Link to={'/'} className={listStyle}><MdKeyboardDoubleArrowRight />Home</Link>
                                <Link to={'/about'} className={listStyle}><MdKeyboardDoubleArrowRight />About</Link>

                                {/* <Link to={'/coming'} className={listStyle}><MdKeyboardDoubleArrowRight />Latest Research</Link> */}
                                <Link to={'/contact'} className={listStyle}><MdKeyboardDoubleArrowRight />Contact</Link>
                                <Link to={'/administrative'} className={listStyle}><MdKeyboardDoubleArrowRight />Administration</Link>
                                <Link to={'/gallery'} className={listStyle}><MdKeyboardDoubleArrowRight />Gallery</Link>
                                <Link to={'/notice'} className={listStyle}><MdKeyboardDoubleArrowRight />Notice Board</Link>
                                <Link to={'/library'} className={listStyle}><MdKeyboardDoubleArrowRight />Library</Link>

                            </div>
                        </div>
                        <div className='w-ful sm:w-[50%] md:w-[14rem] '>
                            <div>
                                <p className='text-[1.09rem] font-[600]'>ADDRESS</p>
                                <p className='w-[80vw] sm:w-[80%] lg:w-[15rem] md:w-[12rem] m-[9px_0] h-[3.4px] bg-[#ffffff] rounded-md'></p>
                            </div>
                            <div className='flex flex-col gap-4 mt-6 text-[#C5C5C5] '>
                                <p className={listStyle}><MdKeyboardDoubleArrowRight />रानी पद्मावती तारा योगतंत्र आदर्श संस्कृत महाविद्यालय इंद्रपुर, शिवपुर, वाराणसी पिन कोड - 221003 </p>
                                <p className={listStyle}><MdKeyboardDoubleArrowRight />ranipadmawati1992@gmail.com</p>
                                <p  className={listStyle}><MdKeyboardDoubleArrowRight />+91 9415697363</p>
                                {/* <Link to={'/wine'} className={listStyle}><MdKeyboardDoubleArrowRight />People</Link>
                                <Link to={'/color'} className={listStyle}><MdKeyboardDoubleArrowRight />Compliance</Link> */}
                            </div>
                        </div>
                    </div>
                    {/* <div className='flex flex-col gap-[2rem]'>
                        <div className='md:w-[16rem] w-[80vw]'>
                            <div>
                                <p className='text-[1.09rem] font-[600]'>MARKET INFORMATION</p>
                                <p className='w-[80vw] md:w-[16rem] m-[9px_0] h-[3.4px] bg-[#ffffff] rounded-md'></p>
                            </div>
                            <div className='flex flex-col gap-4 mt-6  text-[#C5C5C5]'>
                                <Link to={'/'} className={`${contactStyle} lg:items-center`}>Precious Metal Prices</Link>
                                <Link to={'/'} className={`${contactStyle} lg:items-center`}>Weekly  Market Report</Link>
                            </div>
                        </div>
                    </div> */}
                </div>

            </div>
            <div className='text-center text-[1.05rem] font-[600] bg-[#C40424] flex flex-col lg:flex-row items-center gap-[2rem] justify-center p-[2rem]'>
                {/* <Link>Terms & Conditions</Link>
                <Link>Imprit</Link>
                <Link>Privacy Policy</Link>
                <Link>Cookie Information</Link>
                <Link>Contact</Link>
                <Link>Disclaimer</Link> */}
                <p className='text-white'> <span className='text-white'>&#169;</span> {year} | Copyright <span className='text-white bg-clip-text'>
                ranipadmawatiasm</span> - All Rights Reserved</p>

            </div>
        </footer >

    )
}

export default Footer