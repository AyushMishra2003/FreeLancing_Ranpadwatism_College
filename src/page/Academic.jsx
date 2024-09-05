import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsByCategory } from '../redux/slices/postDataSlice'; // Adjust path as needed

const CourseList = () => {
  const dispatch = useDispatch();
  const { academic, status } = useSelector((state) => state.postData);
  const [searchTitle, setSearchTitle] = useState('');
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Fetch academic data when component mounts
    const fetchData = async () => {
      await dispatch(fetchPostsByCategory(11)); // Adjust category ID if needed
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    // Filter courses based on searchTitle
    if (academic) {
      let filtered = academic.filter(course =>
        course.acf.title.toLowerCase().includes(searchTitle.toLowerCase())
      );
      setFilteredCourses(filtered);
    }
  }, [searchTitle, academic]);

  if (status === "loading") {
    return <p className='h-[75vh] flex items-center justify-center'>Loading....</p>;
  }

  const handleViewFile = (fileUrl) => {
    window.open(fileUrl, '_blank');
  };

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-2xl font-bold text-center">पाठ्यक्रम</h1>

      {/* Search Filter */}
      <div className="mb-4">
        <label className="font-bold">Search by Title:</label>
        <input
          type="text"
          onChange={e => setSearchTitle(e.target.value)}
          className="w-full p-2 mt-1 border border-gray-300 rounded shadow-sm"
          placeholder="Search by title..."
        />
      </div>

      <div className="space-y-4">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, index) => (
            <div key={index} className="flex flex-col p-4 text-white bg-teal-600 rounded-md shadow-md sm:flex-row sm:justify-between">
              <div className="flex text-[#fff] items-center mb-2 sm:mb-0">
                <div>
                  <h2 className="text-xl font-semibold">{course.acf.title}</h2>
                  <p>{course.acf.year} Years</p>
                </div>
              </div>
              <button
                onClick={() => handleViewFile(course.acf.custom_file)}
                className="mt-2 text-white transition-all duration-300 sm:mt-0 hover:text-red-500 animation-updown"
              >
                विवरण
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No courses found</p>
        )}
      </div>
    </div>
  );
};

export default CourseList;
