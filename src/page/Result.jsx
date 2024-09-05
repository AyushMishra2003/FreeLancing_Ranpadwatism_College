import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsByCategory } from '../redux/slices/postDataSlice';

const ResultList = () => {
  const { result, status } = useSelector((state) => state.postData);
  const dispatch = useDispatch();

  // State to keep track of which result is being viewed
  const [viewedResult, setViewedResult] = useState(null);

  const fetchResult = async () => {
    console.log("Fetching results...");
    const response = await dispatch(fetchPostsByCategory(5));
    console.log(response);
  };

  useEffect(() => {
    fetchResult();
  }, [dispatch]);

  if (status === "loading") {
    return <p className='h-[100vh] flex items-center justify-center'>Loading....</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-4">
        <h1 className="text-2xl font-bold">Results</h1>
        <div className="flex-grow border-t-2 border-gray-300 mx-2"></div>
      </div>
      <div className="space-y-2">
        {result?.map((item, index) => (
          <div
            key={index}
            className={`flex justify-between items-center p-2 bg-gray-100 rounded-md shadow-md ${
              item.isNew ? 'animate-slideIn' : ''
            }`}
          >
            <div>
              <a href="#" className="text-teal-600 hover:underline font-bold">
                {item.acf.title}
              </a>
              <p className="text-sm text-gray-500">Posted on: {item.acf.date}</p>
            </div>
            <div className="flex items-center">
              <button 
                onClick={() => setViewedResult(item)} 
                className="text-blue-500 hover:underline mr-4"
              >
                View
              </button>
              {item.isNew && (
                <span className="text-red-500 text-sm">NEW</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for viewing the file */}
      {viewedResult && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg shadow-lg w-11/12 h-4/5">
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-2xl font-bold text-gray-600 hover:text-gray-800"
              onClick={() => setViewedResult(null)}
            >
              &times;
            </button>

            <div className="p-4">
              <h2 className="text-xl font-bold">{viewedResult.acf.title}</h2>
              <p className="text-sm text-gray-500">Posted on: {viewedResult.acf.date}</p>

              <div className="mt-4">
                <h3 className="text-lg font-semibold">View File</h3>
                {viewedResult.custom_file ? (
                  <div className="h-full">
                    {/* Display the file */}
                    <iframe
                      src={viewedResult.custom_file}
                      title="File Preview"
                      className="w-full h-96 border border-gray-300 rounded-md"
                    ></iframe>

                    {/* Download Button */}
                    <div className="mt-4">
                      <a href={viewedResult.custom_file} download>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                          Download File
                        </button>
                      </a>
                    </div>
                  </div>
                ) : (
                  <p>No file available for preview and download</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultList;