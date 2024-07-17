import React from 'react';
import { saveAs } from 'file-saver';
import { AiOutlineDownload } from 'react-icons/ai';

const courses = [
    {    
   
          id: 1, name: 'Shastri (Siddhantjyotisham)', department: 'Jyotisha', brochure: 'brochure-shastri-siddhantjyotisham.pdf' },
    { 
       id: 2, name: 'Shastri (Shuklayajurveda)', department: 'Veda', brochure: 'brochure-shastri-shuklayajurveda.pdf' },
    { id: 3, name: 'Shastri (Sarvadarshanam)', department: 'Sarva Darshan', brochure: 'brochure-shastri-sarvadarshanam.pdf' },
    { id: 4, name: 'Shastri (Phalit jyotisham)', department: 'Jyotisha', brochure: 'brochure-shastri-phalitjyotisham.pdf' },
    { id: 5, name: 'Shastri (Paurohityam)', department: 'Paurohityam', brochure: 'brochure-shastri-paurohityam.pdf' },
    { id: 6, name: 'Shastri (Navya Vyakaranam)', department: 'Vyakarana', brochure: 'brochure-shastri-navyavyakaranam.pdf' },
    { id: 7, name: 'Shastri (Sahityam)', department: 'Sahitya', brochure: 'brochure-shastri-sahityam.pdf' },
  ];
  

const  ShastriDetails = () => {
  const downloadBrochure = (fileName) => {
    saveAs(`/path/to/brochures/${fileName}`);
  };

  return (
    <div className="container mx-auto p-4">
           <div className='flex items-center gap-6 justify-center'>
        <div className="flex items-center justify-center text-lg font-semibold mb-4">
        <span className="border-t border-black w-8 mx-2"></span>
           Shastri
        <span className="border-t border-black w-8 mx-2"></span>
      </div>
      <div className="flex justify-center mb-4">
        <button onClick={() => downloadBrochure(archyaCourse.brochure)} className="flex items-center text-blue-500 hover:underline">
          More details <AiOutlineDownload className="ml-1" />
        </button>
      </div>
        </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-red-500">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">S.No</th>
              <th className="px-4 py-2 text-left">Program Name</th>
              <th className="px-4 py-2 text-left">Department</th>
              <th className="px-4 py-2 text-left">Details</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={course.id}>
                <td className="px-4 py-2 border-b text-center">{index + 1}</td>
                <td className="px-4 py-2 border-b text-center">
                  {course.name === 'Archya' ? (
                    <div className="flex items-center justify-center">
                      <span className="border-t border-black w-8 mx-2"></span>
                      {course.name}
                      <span className="border-t border-black w-8 mx-2"></span>
                    </div>
                  ) : (
                    course.name
                  )}
                </td>
                <td className="px-4 py-2 border-b text-center">{course.department}</td>
                <td className="px-4 py-2 border-b text-center">
                  <button onClick={() => downloadBrochure(course.brochure)} className="flex items-center text-blue-500 hover:underline">
                    More details <AiOutlineDownload className="ml-1" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShastriDetails;
