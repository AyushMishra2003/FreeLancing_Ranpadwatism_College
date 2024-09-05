import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import image from '../assets/popumImage.webp'
import img1 from '../assets/notice/n4.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMainNotice } from '../redux/slices/postDataSlice';
const Popup = () => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch()
  const { mainNotice, status } = useSelector((state) => state.postData);


  useEffect(() => {
    // Fetch book data when component mounts
    const fetchData = async () => {
      await dispatch(fetchMainNotice()); // Adjust category ID if needed
    };
    fetchData();
  }, [dispatch]);


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
        <div className="fixed top-0 left-0 z-50 w-full h-screen bg-gray-900 opacity-90">
          <div className="flex items-center justify-center w-full h-screen">
            <div className="p-4 bg-white rounded shadow-md">
              {/* <h2 className="mb-4 text-lg font-bold">School Name</h2> */}
              {/* <ul className="pl-4 list-disc">
                <li>Course 1: Admin Date - 2022-01-01, Website Link</li>
                <li>Course 2: Admin Date - 2022-02-01, Website Link</li>
                <li>Course 3: Admin Date - 2022-03-01, Website Link</li>
              </ul> */}
              {status === 'loading' ? <div className='h-[20rem] w-[18rem] flex items-center justify-center'><p>Loading...</p></div> :
                <img src={mainNotice?.custom_file} alt="" className="w-full max-h-[30rem] object-cover" />

              }
              <button
                className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
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