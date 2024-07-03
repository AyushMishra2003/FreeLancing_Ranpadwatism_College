import React, { useState } from 'react';
import { AiOutlineZoomIn } from 'react-icons/ai'; // Example of using AiOutlineZoomIn icon
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import gallery1 from '../assets/gallery/p1.jpeg';
import gallery2 from '../assets/gallery/p2.jpeg';
import gallery3 from '../assets/gallery/p3.jpeg';
import gallery4 from '../assets/gallery/p4.jpeg';
import gallery5 from '../assets/gallery/p5.jpeg';
import gallery6 from '../assets/gal1.jpg';
import gallery7 from '../assets/gal2.jpg';
import gallery8 from '../assets/gal3.jpg';
import gallery9 from '../assets/gal4.jpg';

const images = [
    gallery1,
    gallery2,
    gallery7,
    gallery3,
    gallery5,
    gallery8,
    gallery9,
    gallery4,
];

const Gallery = () => {
    const [modalImage, setModalImage] = useState(null);

    const openModal = (src) => {
        setModalImage(src);
        document.body.style.overflow = 'hidden'; // Disable scrolling
    };

    const closeModal = () => {
        setModalImage(null);
        document.body.style.overflow = 'auto'; // Enable scrolling
    };

    return (
        <div className="container py-8 mx-auto p-2 pb-[2rem]">
            <div className="flex items-center justify-between mb-4">
                <h1 className='text-[2rem] font-semibold relative inline-block text-center'>
                    Our Happy Moment
                    <span className='absolute left-0 right-0 bottom-[-0.25rem] h-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-red-500'></span>
                </h1>

                <Link
                    to="/gallery"
                    className="px-4 py-2 text-white bg-teal-600 rounded hover:bg-blue-700 transition no-underline"
                >
                    View More
                </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 mb-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-w-1 aspect-h-1"
                        onClick={() => openModal(src)}
                    >
                        <img
                            src={src}
                            alt={`Gallery Image ${index + 1}`}
                            className="object-cover w-full h-full transition duration-300 transform hover:scale-105"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                            <AiOutlineZoomIn className="text-black text-3xl" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {modalImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-auto">
                    <div className="max-w-full max-h-full p-4 bg-white rounded-lg shadow-lg relative">
                        <button
                            className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
                            onClick={closeModal}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <img src={modalImage} alt="Enlarged Image" className="max-w-full max-h-full" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
