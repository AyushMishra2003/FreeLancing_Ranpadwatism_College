import React, { useState, useEffect } from 'react';
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { BiPhotoAlbum, BiVideo } from "react-icons/bi"; // Importing icons for gallery
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/headerImage/logo1.png';

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [galleryDropdownOpen, setGalleryDropdownOpen] = useState(false); // State for dropdown menu
    const location = useLocation();

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    const toggleGalleryDropdown = () => {
        setGalleryDropdownOpen(!galleryDropdownOpen);
    };

    useEffect(() => {
        // Close nav menu and dropdown when navigating to a new page
        setNavOpen(false);
        setGalleryDropdownOpen(false);
    }, [location.pathname]);

    return (
        <>
            <header className="bg-[#800000] text-white">
                <div className="absolute p-3 ml-auto md:hidden">
                    <button onClick={toggleNav} className="focus:outline-none">
                        {navOpen ? <RxCross2 className="text-white text-[1.7rem]" /> : <RxHamburgerMenu className="text-white text-[1.7rem]" />}
                    </button>
                </div>
                <div className="container flex flex-col px-4 py-3 mx-auto md:py-5 md:items-center">
                    <div className="flex flex-col items-center justify-between lg:gap-3 lg:flex-row">
                        <Link to="/">
                            <img src={logo} alt="Central Sanskrit University" className="h-16 w-auto md:h-16 md:w-[5rem] mb-4 md:mb-0" />
                        </Link>
                        <div>
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

                            {/* Dropdown for Gallery */}
                            <div className="relative">
                                <button
                                    onClick={toggleGalleryDropdown}
                                    className="text-white hover:text-[#2d2c2c] no-underline focus:outline-none flex items-center"
                                >
                                    Gallery
                                    <span className="ml-2">
                                        {galleryDropdownOpen ? <RxCross2 /> : <RxHamburgerMenu />}
                                    </span>
                                </button>
                                {galleryDropdownOpen && (
                                    <div className="absolute left-0 w-40 mt-2 bg-[#800000] text-white rounded-md shadow-lg z-10">
                                        <Link to="/gallery" className="flex items-center px-4 py-2 text-white">
                                            <BiPhotoAlbum className="mr-2" /> Photo
                                        </Link>
                                        <Link to="/video" className="flex items-center px-4 py-2 text-white">
                                            <BiVideo className="mr-2" /> Video
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <Link to="/notice" className="text-white hover:text-[#2d2c2c] no-underline">Notice Board</Link>
                            <Link to="/academic" className="text-white hover:text-[#2d2c2c] no-underline">Academic</Link>
                            <Link to="/result" className="text-white hover:text-[#2d2c2c] no-underline">Result</Link>
                            <Link to="/library" className="text-white hover:text-[#2d2c2c] no-underline">Library</Link>
                        </div>
                    </nav>
                </div>

                {/* Mobile Navigation */}
                {navOpen && (
                    <nav className="md:hidden bg-[#800000] py-2 px-4">
                        <div className="flex flex-col gap-3 pb-10">
                            <Link to="/" className="text-white hover:text-[#2d2c2c] no-underline">Home</Link>
                            <Link to="/about" className="text-white hover:text-[#2d2c2c] no-underline">About</Link>
                            <Link to="/administrative" className="text-white hover:text-[#2d2c2c] no-underline">Administration</Link>
                            <Link to="/contact" className="text-white hover:text-[#2d2c2c] no-underline">Contact</Link>

                            {/* Dropdown for Gallery in Mobile */}
                            <div className="relative">
                                <button
                                    onClick={toggleGalleryDropdown}
                                    className="text-white hover:text-[#2d2c2c] no-underline focus:outline-none flex items-center"
                                >
                                    Gallery
                                    <span className="ml-2">
                                        {galleryDropdownOpen ? <RxCross2 /> : <RxHamburgerMenu />}
                                    </span>
                                </button>
                                {galleryDropdownOpen && (
                                    <div className="absolute left-0 w-40 mt-2 bg-[#800000] text-white rounded-md shadow-lg z-10">
                                        <Link to="/gallery" className="flex items-center px-4 py-2 text-white">
                                            <BiPhotoAlbum className="mr-2" /> Photo
                                        </Link>
                                        <Link to="/video" className="flex items-center px-4 py-2 text-white">
                                            <BiVideo className="mr-2" /> Video
                                        </Link>
                                    </div>
                                )}
                            </div>

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
