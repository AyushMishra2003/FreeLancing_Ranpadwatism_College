import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const courses = [
  {
    name: "Prak Shastri (Intermediate)",
    duration: "2 years",
    link: "link-to-prak-shastri.pdf",
    to:"/comingSoon"
  },
  {
    name: "Shastri (B. A.)",
    duration: "3 years",
    link: "link-to-shastri.pdf",
    to:"/cousre/shastri"
  },
  {
    name: "Acharya (M. A.)",
    duration: "2 years",
    link: "link-to-acharya.pdf",
        to:"/cousre/archya"
  },
];

const CourseList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, [])
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">पाठ्यक्रम</h1>
      <div className="space-y-4">
        {courses.map((course, index) => (
          <div key={index} className="bg-teal-600 text-white p-4 rounded-md shadow-md flex flex-col sm:flex-row sm:justify-between">
            <div className="flex items-center mb-2 sm:mb-0">
              <span className="text-lg font-bold mr-2">{index + 1}. </span>
              <div>
                <h2 className="text-xl font-semibold">{course.name}</h2>
                <p>{course.duration}</p>
              </div>
            </div>
            <Link
              to={course.to}
              className="mt-2 sm:mt-0 text-white hover:text-red-500 transition-all duration-300 animation-updown"
            >
              विवरण
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
