import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/headerImage/logo1.jpg';

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <>
            <div className="w-[100vw] flex justify-center items-center bg-[#333333] py-2">
                <div className="text-center flex items-center gap-3">
                    <h1 className="text-[1.2rem] text-white">English: problem</h1>
                    <h2 className="text-[1.2rem] text-white">संस्कृत संस्करणम्: क्षय</h2>
                    <h2 className="text-[1.2rem] text-white">हिन्दी संस्करण: समस्या</h2>
                </div>
            </div>
            <header className="bg-[#800000] text-white">
                <div className="container mx-auto px-4 py-3 md:py-5 flex flex-col lg:items-center ">
                    <div className="flex items-center justify-between lg:gap-3">
                        <Link to="/">
                            <img src={logo} alt="Central Sanskrit University" className="h-16 w-auto md:h-16 md:w-[5rem] mb-4 md:mb-0" />
                        </Link>
                        <div className="">
                            <h1 className="text-2xl md:text-3xl font-bold leading-tight">रानी पद्मावती तारा योगतंत्र आदर्श संस्कृत महाविद्यालय</h1>
                            <p className="text-sm text-center md:text-left">Established by an Act of Parliament</p>
                        </div>
                    </div>
                    <nav className="flex flex-col lg:flex-row lg:items-center">
                        <div className="hidden md:flex md:items-center md:gap-3 lg:gap-[3rem]">
                            <Link to="/" className="text-white hover:text-[#2d2c2c]">Home</Link>
                            <Link to="/about" className="text-white">University</Link>
                            <Link to="/administrative" className="text-white">Administration</Link>
                            <Link to="/contact" className="text-white">Schemes</Link>
                            <Link to="/gallery" className="text-white">Distance Education</Link>
                            <Link to="/notice" className="text-white">Notice Board</Link>
                        </div>
                        <div className="md:hidden ml-auto">
                            <button onClick={toggleNav} className="focus:outline-none">
                                {navOpen ? <FaTimes className="text-white" /> : <FaBars className="text-white" />}
                            </button>
                        </div>
                    </nav>
                </div>
                {navOpen && (
                    <nav className="md:hidden bg-red-700 py-2 px-4">
                        <div className="flex flex-col gap-3">
                            <Link to="/" className="text-white hover:text-white">Home</Link>
                            <Link to="/about" className="text-white hover:text-white">University</Link>
                            <Link to="/administrative" className="text-white hover:text-white">Administration</Link>
                            <Link to="/contact" className="text-white hover:text-white">Schemes</Link>
                            <Link to="/gallery" className="text-white hover:text-white">Distance Education</Link>
                            <Link to="/notice" className="text-white hover:text-white">Notice Board</Link>
                        </div>
                    </nav>
                )}
            </header>
        </>
    );
};

export default Header;
