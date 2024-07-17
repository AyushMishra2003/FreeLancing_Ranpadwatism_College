import React from 'react';
import { saveAs } from 'file-saver';
import { AiOutlineDownload } from 'react-icons/ai';


const courses = [
    { 
    
        id: 1, name: 'Acharya (Navya Vyakaranam)', department: 'Vyakarana', brochure: 'brochure-navya-vyakaranam.pdf' },
    { 
    
          id: 2, name: 'Acharya (Sahityam)', department: 'Sahitya', brochure: 'brochure-sahityam.pdf' },
    { 
    
          id: 3, name: 'Acharya (Siddhantjyotisham)', department: 'Jyotisha', brochure: 'brochure-siddhantjyotisham.pdf' }, 
    { 
  
   
          id: 4, name: 'Acharya (Phalit Jyotisham)', department: 'Jyotisha', brochure: 'brochure-phalit-jyotisham.pdf'
         },
  ];
  

const archyaCourse = { id: 1, name: 'Archya', department: '', brochure: 'brochure-archya.pdf' };

const CourseDetails = () => {
  const downloadBrochure = (fileName) => {
    saveAs(`/path/to/brochures/${fileName}`);
  };

  return (
    <div className="container mx-auto p-4 pb-10">
        <div className='flex items-center gap-6 js'>
        <div className="flex items-center justify-center text-lg font-semibold mb-4">
        <span className="border-t border-black w-8 mx-2"></span>
        {archyaCourse.name}
        <span className="border-t border-black w-8 mx-2"></span>
      </div>
      <div className="flex justify-center mb-4">
        <button onClick={() => downloadBrochure(archyaCourse.brochure)} className="flex items-center text-blue-500 hover:underline">
          More details <AiOutlineDownload className="ml-1" />
        </button>
      </div>
        </div>
     

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">S.No</th>
              <th className="px-4 py-2 text-left">Program Name</th>
              <th className="px-4 py-2 text-left">Department</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={course.id} className="border-b">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{course.name}</td>
                <td className="px-4 py-2">{course.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseDetails;
