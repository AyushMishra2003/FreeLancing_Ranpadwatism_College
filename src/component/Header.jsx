import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/headerImage/logo1.png';

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    const location = useLocation();

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    useEffect(() => {
        // Close nav menu when navigating to a new page
        setNavOpen(false);
    }, [location.pathname]); // Reset navOpen when location changes

    return (
        <>
            <div className="w-[100vw] flex justify-center items-center bg-[#333333] py-2">
                <div className="text-center flex items-center gap-3">
                    <h1 className="lg:text-[1.2rem] text-[1rem] text-[#D49B41]">English: problem</h1>
                    <h2 className="lg:text-[1.2rem] text-[1rem] text-white">संस्कृत संस्करणम्: क्षय</h2>
                    <h2 className="lg:text-[1.2rem] text-[1rem] text-white">हिन्दी संस्करण: समस्या</h2>
                </div>
            </div>
            <header className="bg-[#800000] text-white">
                <div className="container mx-auto px-4 py-3 md:py-5 flex flex-col md:items-center ">
                    <div className="flex flex-col items-center justify-between lg:gap-3 lg:flex-row ">
                        <Link to="/">
                            <img src={logo} alt="Central Sanskrit University" className="h-16 w-auto md:h-16 md:w-[5rem] mb-4 md:mb-0" />
                        </Link>
                        <div className="">
                            <h1 className="text-2xl md:text-3xl font-bold leading-tight text-center">रानी पद्मावती तारा योगतंत्र आदर्श संस्कृत महाविद्यालय</h1>
                            <p className="text-sm text-center md:text-left">Established by an Act of Parliament</p>
                        </div>
                    </div>
                    <nav className="flex flex-col lg:flex-row lg:items-center">
                        <div className="hidden md:flex md:items-center md:gap-3 lg:gap-[3rem]">
                            <Link to="/" className="text-white hover:text-[#2d2c2c] no-underline">Home</Link>
                            <Link to="/about" className="text-white hover:text-[#2d2c2c] no-underline">About</Link>
                            <Link to="/administrative" className="text-white hover:text-[#2d2c2c] no-underline">Administration</Link>
                            <Link to="/contact" className="text-white hover:text-[#2d2c2c] no-underline">Contact</Link>
                            <Link to="/gallery" className="text-white hover:text-[#2d2c2c] no-underline">Gallery</Link>
                            <Link to="/notice" className="text-white hover:text-[#2d2c2c] no-underline">Notice Board</Link>
                            <Link to="/academic" className="text-white hover:text-[#2d2c2c] no-underline">Academic</Link>
                            <Link to="/result" className="text-white hover:text-[#2d2c2c] no-underline">Result</Link>
                            <Link to="/library" className="text-white hover:text-[#2d2c2c] no-underline">Library</Link>
                        </div>
                        <div className="md:hidden ml-auto">
                            <button onClick={toggleNav} className="focus:outline-none">
                                {navOpen ? <FaTimes className="text-white text-[2rem]" /> : <FaBars className="text-white text-[2rem]" />}
                            </button>
                        </div>
                    </nav>
                </div>
                {navOpen && (
                    <nav className="md:hidden bg-[#800000] py-2 px-4">
                        <div className="flex flex-col gap-3">
                            <Link to="/" className="text-white hover:text-[#2d2c2c] no-underline">Home</Link>
                            <Link to="/about" className="text-white hover:text-[#2d2c2c] no-underline">About</Link>
                            <Link to="/administrative" className="text-white hover:text-[#2d2c2c] no-underline">Administration</Link>
                            <Link to="/contact" className="text-white hover:text-[#2d2c2c] no-underline">Contact</Link>
                            <Link to="/gallery" className="text-white hover:text-[#2d2c2c] no-underline">Gallery</Link>
                            <Link to="/notice" className="text-white hover:text-[#2d2c2c] no-underline">Notice Board</Link>
                            <Link to="/academic" className="text-white hover:text-[#2d2c2c] no-underline">Academic</Link>
                            <Link to="/comingSoon" className="text-white hover:text-[#2d2c2c] no-underline">Result</Link>
                            <Link to="/library" className="text-white hover:text-[#2d2c2c] no-underline">Library</Link>
                        </div>
                    </nav>
                )}
            </header>
        </>
    );
};

export default Header;
