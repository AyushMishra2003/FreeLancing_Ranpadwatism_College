import React, { useEffect, useState } from 'react';
import { AiOutlineZoomIn } from 'react-icons/ai'; // Example of using AiOutlineZoomIn icon
import { fetchGallery } from '../redux/slices/postDataSlice';
import { useDispatch, useSelector } from 'react-redux';

const Gallery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [modalImage, setModalImage] = useState(null);

    const dispatch = useDispatch();
    const { gallery, status } = useSelector((state) => state.postData);

    // Access the rendered HTML content
    const renderedContent = gallery?.content?.rendered;

    // Regular expression to match image URLs in src and srcset attributes
    const regex = /src="([^"]+)"/g;

    // Initialize an array to hold the image URLs
    const imageLinks = [];

    // Extract image URLs from renderedContent using regex
    let match;
    while ((match = regex.exec(renderedContent)) !== null) {
        imageLinks.push(match[1]);
    }

    // Remove duplicates by converting the array to a Set and then back to an array
    const uniqueImageLinks = [...new Set(imageLinks)];

    useEffect(() => {
        // Fetch gallery data when component mounts
        const fetchData = async () => {
            await dispatch(fetchGallery());
        };
        fetchData();
    }, [dispatch]);

    const openModal = (src) => {
        setModalImage(src);
        document.body.style.overflow = 'hidden'; // Disable scrolling
    };

    const closeModal = () => {
        setModalImage(null);
        document.body.style.overflow = 'auto'; // Enable scrolling
    };

    return (
        <div className="container p-2 py-8 mx-auto">
            <h1 className="text-[2rem] font-semibold relative inline-block mb-4">
                Image Gallery
                <span className="absolute left-0 right-0 bottom-[-0.25rem] h-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"></span>
            </h1>

            {/* Display skeleton loading when status is loading */}
            {status === 'loading' ? (
                <div className="grid grid-cols-1 gap-4 mb-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden bg-gray-200 rounded-lg shadow-lg cursor-pointer aspect-w-1 aspect-h-1 animate-pulse"
                        >
                            <div className="absolute inset-0 flex items-center justify-center">
                                <AiOutlineZoomIn className="text-3xl text-gray-500" />
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-4 mb-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {uniqueImageLinks?.map((src, index) => (
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
                            <div className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 hover:opacity-100">
                                <AiOutlineZoomIn className="text-3xl text-black" />
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Modal */}
            {modalImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
                    <div className="max-w-full max-h-full p-4 bg-white rounded-lg shadow-lg">
                        <button
                            className="absolute text-white top-4 right-4 hover:text-gray-300 focus:outline-none"
                            onClick={closeModal}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
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
