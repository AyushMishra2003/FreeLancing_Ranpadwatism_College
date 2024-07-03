import React from 'react';

const results = [
  { name: "Acharya (M.A.) (2nd Semester) in Advaita Vedanta", date: "03/07/2024", isNew: true },
  { name: "Acharya (M.A.) (2nd Semester) in Bauddha Darshana", date: "03/07/2024", isNew: false },
  { name: "Acharya (M.A.) (2nd Semester) in Darshana", date: "03/07/2024", isNew: true },
  // Add more results here...
];

const ResultList = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-4">
        <h1 className="text-2xl font-bold">Results</h1>
        <div className="flex-grow border-t-2 border-gray-300 mx-2"></div>
      </div>
      <div className="space-y-2">
        {results.map((result, index) => (
          <div
            key={index}
            className={`flex justify-between items-center p-2 bg-gray-100 rounded-md shadow-md ${
              result.isNew ? 'animate-slideIn' : ''
            }`}
          >
            <div>
              <a href="#" className="text-teal-600 hover:underline font-bold">
                {result.name}
              </a>
              <p className="text-sm text-gray-500">Posted on: {result.date}</p>
            </div>
            {result.isNew && (
              <span className="text-red-500 text-sm ml-2">NEW</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultList;
