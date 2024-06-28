import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import gallery1 from '../assets/gal1.jpg'
import gallery2 from '../assets/gal2.jpg'
import gallery3 from '../assets/gal3.jpg'
import gallery4 from '../assets/gal4.jpg'
import gallery5 from '../assets/gal5.jpeg'
import gallery6 from '../assets/gal6.jpeg'
import { FaPlus } from "react-icons/fa";



const images = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6
]


Modal.setAppElement('#root');

const Gallery = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const openModal = (image) => {
        setSelectedImage(image);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedImage('');
    };

    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])

    return (
        <div className="container py-8 mx-auto">
            <h1 className="mb-6 text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Our Happy Moment
            </h1>

            <h2 className="mb-4 text-2xl font-semibold">Image Gallery</h2>
            <div>
            <div className="grid grid-cols-1 gap-4 mb-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" >
                {images.map((src, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-lg cursor-pointer" >
                        <img src={src} alt={`Gallery Image ${index + 1}`} className="object-cover w-full h-auto" />
                    </div>
                ))}
            </div>
            </div>
            <button
                className=" w-fit flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                View More
                <FaPlus/>
            </button>

         
        </div>
    );
};

export default Gallery;
