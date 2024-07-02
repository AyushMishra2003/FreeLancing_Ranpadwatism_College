import React from 'react';
import { FaDownload } from 'react-icons/fa';
import notice1 from '../assets/notice1.jpg';
import notice2 from '../assets/notice2.jpg';

const notices = [
  {
    sno: 1,
    heading: 'Guest Teacher Veda, Yoga Shikshak, Bhasha Sikshak Vacancy -',
    date: '2024-07-01',
    image: notice1,
    pdf: notice1,
  },
  {
    sno: 2,
    heading: 'International Yoga',
    date: '2024-07-02',
    image: notice2,
    pdf: notice2,
  },
  {
    sno: 3,
    heading: 'International Yoga',
    date: '2024-07-03',
    image: notice2,
    pdf: notice2,
  },
  // Add more notices as needed
];

const NoticeBoard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Notice Board</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white table-auto">
          <thead className="border border-black text-black">
            <tr>
              <th className="py-2 text-center">S.No</th>
              <th className="py-2 text-center">Heading</th>
              <th className="py-2 text-center">Date</th>
              <th className="py-2 text-center">Image</th>
              <th className="py-2 text-center">Download PDF</th>
            </tr>
          </thead>
          <tbody>
            {notices.map((notice, index) => (
              <tr key={index} className="border-b">
                <td className="text-center py-2">{notice.sno}</td>
                <td className="text-center py-2">{notice.heading}</td>
                <td className="text-center py-2">{notice.date}</td>
                <td className="text-center py-2">
                  <img
                    src={notice.image}
                    alt={notice.heading}
                    className="object-cover w-24 h-24 mx-auto rounded-lg"
                  />
                </td>
                <td className="text-center py-2">
                  <a
                    href={notice.pdf}
                    download
                    className="text-blue-500 hover:text-blue-700 flex items-center justify-center"
                  >
                    <FaDownload className="mr-2" />
                    Download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NoticeBoard;
