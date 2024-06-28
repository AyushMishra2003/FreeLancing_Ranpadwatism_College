import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/headerImage/logo1.jpg'
const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <header className="bg-[#800000] text-white">
            <div className="container mx-auto  justify-between  flex flex-col items-center gap-5 pb-3">
                <div className="w-[100vw] flex justify-center items-center bg-[#333333]">
                    <div className="text-center flex items-center gap-3">
                        <h1 className="text-[1.2rem]">English: problem</h1>
                        <h2 className="text-[1.2rem]">संस्कृत संस्करणम्: क्षय</h2>
                        <h2 className="text-[1.2rem]">हिन्दी संस्करण: समस्या</h2>
                    </div>
                </div>
                <div className="flex items-center">
                    <img src={logo} alt="Central Sanskrit University" className="h-16 w-[5rem]" />
                    <div className="ml-4">
                        <h1 className="text-3xl font-bold"> रानी पद्मावती तारा योगतंत्र आदर्श संस्कृत महाविद्यालय</h1>
                        <p className="text-sm text-center">Established by an Act of Parliament</p>
                    </div>
                </div>
                <nav className="hidden md:flex gap-3 lg:gap-[3rem] lg:items-center lg:justify-between">
                    <Link to="/" className="text-white hover:text-[#2d2c2c]">Home</Link>
                    <Link to="/university" className="text-white">University</Link>
                    <Link to="/administration" className="text-white">Administration</Link>
                    <Link to="/schemes" className="text-white ">Schemes</Link>
                    <Link to="/distance-education" className="text-white">Distance Education</Link>
                </nav>
                <div className="md:hidden">
                    <button onClick={toggleNav} className="focus:outline-none">
                        {navOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
            {navOpen && (
                <nav className="md:hidden bg-red-700">
                    <Link to="/" className="text-white hover:text-white">Home</Link>
                    <Link to="/university" className="text-white hover:text-white">University</Link>
                    <Link to="/administration" className="text-white hover:text-white">Administration</Link>
                    <Link to="/schemes" className="text-white hover:text-white">Schemes</Link>
                    <Link to="/distance-education" className="text-white hover:text-white">Distance Education</Link>
                </nav>
            )}
        </header>
    );
};

export default Header;