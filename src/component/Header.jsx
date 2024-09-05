import React, { useState, useEffect } from 'react';
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

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

            <header className="bg-[#800000] text-white">
                <div className="absolute p-3 ml-auto md:hidden">
                    <button onClick={toggleNav} className="focus:outline-none">
                        {navOpen ? <RxCross2 className="text-white text-[1.7rem]" /> : <RxHamburgerMenu className="text-white text-[1.7rem]" />}
                    </button>
                </div>
                <div className="container flex flex-col px-4 py-3 mx-auto md:py-5 md:items-center ">
                    <div className="flex flex-col items-center justify-between lg:gap-3 lg:flex-row ">
                        <Link to="/">
                            <img src={logo} alt="Central Sanskrit University" className="h-16 w-auto md:h-16 md:w-[5rem] mb-4 md:mb-0" />
                        </Link>
                        <div className="">
                            <h1 className="text-2xl font-bold leading-tight text-center md:text-3xl">रानी पद्मावती तारा योगतंत्र आदर्श संस्कृत महाविद्यालय</h1>
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

                    </nav>
                </div>
                {navOpen && (
                    <nav className="md:hidden bg-[#800000] py-2 px-4">
                        <div className="flex flex-col gap-3 pb-10">
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
                    </nav>
                )}
            </header>
        </>
    );
};

export default Header;
