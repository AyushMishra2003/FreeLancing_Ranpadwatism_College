import React, { useEffect } from 'react';
import { FaDownload } from 'react-icons/fa';
import notice1 from '../assets/notice/n1.jpg'
import notice2 from '../assets/notice/n2.jpg'
import notice3 from '../assets/notice/n3.jpg'
import notice4 from '../assets/notice/n4.jpg'
import notice5 from '../assets/notice/n6.jpeg'
import notice7 from '../assets/notice/notice7.pdf'
import notice8 from '../assets/notice3.jpg'
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
    heading: 'ADMISSION OPEN FOR SESSION 2024-25-19-05-2024',
    date: '2024-07-02',
    image: notice2,
    pdf: notice2,
  },
  {
    sno: 3,
    heading: 'International Yoga Day-20-06-2024',
    date: '2024-07-03',
    image: notice3,
    pdf: notice2,
  },
  {
    sno: 4,
    heading: 'Recruitment for Session 2024-25-28-06-2024',
    date: '2024-07-03',
    image: notice4,
    pdf: notice2,
  },
  {
    sno: 5,
    heading: 'Recruitment for Session 2024-25-28-06-2024',
    date: '2024-07-03',
    image: notice5,
    pdf: notice2,
  },
  {
    sno: 6,
    heading: 'Related to Recruitment for session 2024-25',
    date: '30-06-2024',
    image: notice7,
    pdf: notice7,
  },
  {
    sno: 7,
    heading: 'Recruitment Result',
    date: '15-07-2024',
    image: notice8,
    pdf: notice8,
  },
  // Add more notices as needed
];

const NoticeBoard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, [])
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
                    className="text-teal-600 hover:text-blue-700 flex items-center justify-center"
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
