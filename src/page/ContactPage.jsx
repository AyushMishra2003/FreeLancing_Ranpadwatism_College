import React, { useEffect } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className='bg-main my-8 flex flex-col items-center justify-center w-[100%] pb-[2rem] gap-[2rem]'>
            <div className='xl:p-[1.8rem] flex flex-col lg:flex-row justify-center w-fit overflow-x-hidden items-center'>
                <div className='bg-blue xl:p-[2rem] text-black flex flex-col gap-[1.2rem] lg:rounded-l-[0.5rem] lg:rounded-tr-none rounded-t-[0.5rem] lg:w-[45vw] md:w-[70vw] p-[2rem] w-[95vw] sm:w-[60vw]'>
                    <h1 className='text-[2rem] font-semibold relative inline-block'>
                        Contact Us
                        <span className='absolute left-0 right-0 bottom-[-0.25rem] h-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-red-500'></span>
                    </h1>
                    <form className='flex flex-col lg:gap-[2rem] gap-4'>
                        <div className='flex flex-col justify-between gap-4 lg:gap-2 lg:flex-row'>
                            <div className='flex flex-col gap-[0.3rem] xl:w-full'>
                                <p className='text-[0.82rem] font-semibold pl-1 tracking-wider'>FULL NAME</p>
                                <input className='p-2 rounded-[3.5px] outline-none bg-white text-black border border-black' type="text" placeholder='Name' />
                            </div>
                            <div className='flex flex-col gap-[0.3rem] w-full'>
                                <p className='text-[0.82rem] font-semibold pl-1 tracking-wider'>EMAIL ADDRESS</p>
                                <input className='p-2 rounded-[3.5px] outline-none bg-white text-black border border-black' type="email" placeholder='Email' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-[0.3rem]'>
                            <p className='text-[0.82rem] font-semibold pl-1 tracking-wider'>SUBJECT</p>
                            <input type="text" placeholder='Subject' className='p-2 rounded-[3.5px] outline-none bg-white text-black border border-black' />
                        </div>
                        <div className='flex flex-col gap-[0.3rem]'>
                            <p className='text-[0.82rem] font-semibold pl-1 tracking-wider'>MESSAGE</p>
                            <textarea name="Message" placeholder='Message' className='h-[5rem] w-full resize-none p-2 outline-none rounded-[3.5px] bg-white text-black border border-black'></textarea>
                        </div>
                        <button className='p-[0.5rem] px-[2rem] text-white rounded-[0.2rem] bg-teal-600 w-fit hover:bg-red-5000 hover:text-red hover:font-semibold transition-all duration-300'>Send Message</button>
                    </form>
                </div>
                <div className=''>
                    <iframe
                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.56125422836!2d82.95488157844927!3d25.35249966768744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2dadeca0c43b%3A0x9e4ef048a58b071!2sIndrapur%20-%20Shivpur%20Link%20Rd%2C%20Shivpur%2C%20Varanasi%2C%20Uttar%20Pradesh%20221003!5e0!3m2!1sen!2sin!4v1716582077117!5m2!1sen!2sin"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                        className='xl:w-[28rem] w-[95vw] h-[25rem] lg:rounded-r-[0.5rem] lg:rounded-bl-none rounded-b-[0.5rem] xl:h-[31.3rem] sm:w-[60vw] md:w-[70vw] lg:w-[25rem] lg:h-[31.25rem]'
                    />
                </div>
            </div>
            <div className='flex gap-[2rem] flex-col lg:flex-row justify-between w-[95vw] sm:w-[60vw] md:w-[70vw] items-center'>
                <Link target='_blank' to={"https://www.google.com/maps/place/Atal+Innovation+Center+(AIC+Office)/@25.2610349,82.9903649,17z/data=!3m1!4b1!4m6!3m5!1s0x398e337df3462881:0xb80d8ab74bfef3e5!8m2!3d25.2610349!4d82.9929398!16s%2Fg%2F11j489qh4l?hl=en&entry=ttu"} className='w-[15rem] flex flex-col gap-[0.3rem] items-center'>
                    <Link className='p-[0.8rem] rounded-[5rem] bg-teal-600'><FaLocationDot className='text-[1.5rem] text-white' /></Link>
                    <p className='text-center text-black text-[0.95rem]'><span className='text-[1.2rem] font-semibold tracking-wide'>Address: </span>रानी पद्मावती तारा योगतंत्र आदर्श संस्कृत महाविद्यालय इंद्रपुर, शिवपुर, वाराणसी पिन कोड - 221003 </p>
                </Link>
                <div className='w-[15rem] flex flex-col gap-[0.3rem] items-center'>
                    <Link className='p-[0.8rem] rounded-[5rem] bg-teal-600'><FaPhoneAlt className='text-[1.5rem] text-white' /></Link>
                    <p className='text-center text-black'><span className='text-[1.2rem] font-semibold tracking-wide'>Phone: </span>+91 9415810978</p>
                </div>
                <div className='w-[15rem] flex flex-col gap-[0.3rem] items-center'>
                    <Link className='p-[0.8rem] rounded-[5rem] bg-teal-600'><MdEmail className='text-[1.5rem] text-white' /></Link>
                    <p className='text-center text-black'><span className='text-[1.2rem] font-semibold tracking-wide'>Email: </span>ranipadmawati1992@gmail.com</p>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
