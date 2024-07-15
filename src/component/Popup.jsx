import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import image from '../assets/popumImage.webp'
import img1 from '../assets/notifcation1.jpg'
const Popup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const currentLocation = window.location.pathname;
    if (currentLocation === '/') {
      setShow(true);
    } else {
      setShow(false);
    }
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Fragment>
      {show && (
        <div className="fixed top-0 left-0 w-full h-screen bg-gray-900 opacity-90 z-50">
          <div className="h-screen w-full flex justify-center items-center">
            <div className="bg-white p-4 rounded shadow-md">
              {/* <h2 className="text-lg font-bold mb-4">School Name</h2> */}
              {/* <ul className="list-disc pl-4">
                <li>Course 1: Admin Date - 2022-01-01, Website Link</li>
                <li>Course 2: Admin Date - 2022-02-01, Website Link</li>
                <li>Course 3: Admin Date - 2022-03-01, Website Link</li>
              </ul> */}
           <img src={img1} alt="" className="w-full max-h-[30rem] object-cover" />
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Popup;