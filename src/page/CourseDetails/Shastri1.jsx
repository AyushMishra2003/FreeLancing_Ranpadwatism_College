import React, { useEffect } from 'react';
import { saveAs } from 'file-saver';
import { AiOutlineDownload } from 'react-icons/ai';
import brochureArchya from '../../../public/Prospectus_2024_2025_ps.pdf';

const courses = [
  { id: 1, name: 'Shastri (Siddhantjyotisham)', department: 'Jyotisha', brochure: brochureArchya },
  { id: 2, name: 'Shastri (Shuklayajurveda)', department: 'Veda', brochure: 'brochure-shastri-shuklayajurveda.pdf' },
  { id: 3, name: 'Shastri (Sarvadarshanam)', department: 'Sarva Darshan', brochure: 'brochure-shastri-sarvadarshanam.pdf' },
  { id: 4, name: 'Shastri (Phalit jyotisham)', department: 'Jyotisha', brochure: 'brochure-shastri-phalitjyotisham.pdf' },
  { id: 5, name: 'Shastri (Paurohityam)', department: 'Paurohityam', brochure: 'brochure-shastri-paurohityam.pdf' },
  { id: 6, name: 'Shastri (Navya Vyakaranam)', department: 'Vyakarana', brochure: 'brochure-shastri-navyavyakaranam.pdf' },
  { id: 7, name: 'Shastri (Sahityam)', department: 'Sahitya', brochure: 'brochure-shastri-sahityam.pdf' },
];

const archyaCourse = { id: 1, name: 'Shastri', department: '',brochure: brochureArchya };

const Shastri1 = () => {
  const downloadBrochure = (brochureUrl) => {
    saveAs(brochureUrl);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto p-4 pb-10">
      <div className="flex items-center gap-6 js">
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

export default Shastri1;
