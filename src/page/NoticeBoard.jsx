import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsByCategory } from '../redux/slices/postDataSlice';

const NoticeBoard = () => {
  const { notice, status } = useSelector((state) => state.postData); // Assuming state has 'notice' and 'status'
  const dispatch = useDispatch();

  const [filteredNotices, setFilteredNotices] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');

  // Fetch notice when the component is mounted
  const fetchNoticesList = async () => {
    await dispatch(fetchPostsByCategory(3)); // Adjust fetch action as needed
  };

  // Format the date from 'YYYYMMDD' to 'dd-mm-yyyy'
  const formatDate = (dateString) => {
    const year = dateString.slice(0, 4);
    const month = dateString.slice(4, 6);
    const day = dateString.slice(6, 8);
    return `${day}-${month}-${year}`;
  };

  // Convert formatted date (dd-mm-yyyy) to a comparable format
  const toComparableDate = (dateString) => {
    const [day, month, year] = dateString.split('-');
    return `${year}${month}${day}`; // YYYYMMDD format for comparison
  };

  // Function to handle viewing the file
  const handleViewFile = (fileUrl) => {
    const newWindow = window.open(fileUrl, '_blank');
    if (fileUrl.endsWith('.pdf')) {
      newWindow.onload = () => {
        newWindow.print();
      };
    }
  };

  // Filter and sort notices based on the search title
  useEffect(() => {
    let filtered = notice ? [...notice] : []; // Create a shallow copy of the array

    // Filter by title
    if (searchTitle) {
      filtered = filtered.filter(item =>
        item.acf.title.toLowerCase().includes(searchTitle.toLowerCase())
      );
    }

    // Sort by date (latest first)
    filtered = filtered.slice().sort((a, b) => {
      const dateA = toComparableDate(formatDate(a.acf.date));
      const dateB = toComparableDate(formatDate(b.acf.date));
      return dateB.localeCompare(dateA); // Sort in descending order
    });

    setFilteredNotices(filtered);
  }, [searchTitle, notice]);

  useEffect(() => {
    fetchNoticesList();
  }, [dispatch]);

  if (status === "loading") {
    return <p className='h-[100vh] flex items-center justify-center'>Loading....</p>;
  }

  return (
    <div className="container mx-auto sm:p-4">
      {/* Filters */}
      <div className="flex flex-col items-center gap-4 mb-4 sm:flex-row sm:justify-between">
        <div className="w-full sm:w-auto">
          <label className="font-bold">Filter by Title:</label>
          <input
            type="text"
            onChange={e => setSearchTitle(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded shadow-sm sm:mt-0"
            placeholder="Search by title..."
          />
        </div>
      </div>

      {/* Display filtered results or no data found */}
      <div className="min-h-[40vh] space-y-3">
        {filteredNotices.length > 0 ? (
          filteredNotices?.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-100 rounded-md shadow-md"
            >
              <div>
                <a href="#" className="font-bold text-teal-600 hover:underline">
                  {item.acf.title}
                </a>
                <p className="mt-2 text-sm text-gray-900">
                  Posted on: {formatDate(item.acf.date)}
                </p>
              </div>
              <div className="flex items-center min-w-[3rem]  justify-end">
                {item.custom_file && (
                  <button
                    onClick={() => handleViewFile(item.custom_file)}
                    className="text-blue-500 hover:underline"
                  >
                    View
                  </button>
                )}
                {item.isNew && (
                  <span className="text-sm text-red-500">NEW</span>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-lg text-gray-500">No data found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NoticeBoard;
