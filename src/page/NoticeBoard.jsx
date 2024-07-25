import React, { useEffect, useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import notice1 from '../assets/notice/n1.jpg';
import notice2 from '../assets/notice/n2.jpg';
import notice3 from '../assets/notice/n3.jpg';
import notice4 from '../assets/notice/n4.jpg';
import notice5 from '../assets/notice/n6.jpeg';
import notice7 from '../assets/notice/notice7.pdf';
import notice8 from '../assets/notice3.jpg';
import notice9 from '../assets/notice/notice8.jpg';
import notice10 from '../assets/notice/notice9.pdf'; 

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
    date: '2024-06-20',
    image: notice3,
    pdf: notice3,
  },
  {
    sno: 4,
    heading: 'Recruitment for Session 2024-25-28-06-2024',
    date: '2024-06-28',
    image: notice4,
    pdf: notice4,
  },
  {
    sno: 5,
    heading: 'Recruitment for Session 2024-25-28-06-2024',
    date: '2024-06-28',
    image: notice5,
    pdf: notice5,
  },
  {
    sno: 6,
    heading: 'Related to Recruitment for session 2024-25',
    date: '2024-06-30',
    image: notice7,
    pdf: notice7,
  },
  {
    sno: 7,
    heading: 'Recruitment Result',
    date: '2024-07-15',
    image: notice8,
    pdf: notice8,
  },
  {
    sno: 8,
    heading: 'Advertisement Sahitya',
    date: '2024-07-25',
    image: notice9,
    pdf: notice9,
  },
  {
    sno: 9,
    heading: 'Advertisement Related Pdf',
    date: '2024-07-25',
    image: notice10,
    pdf: notice10,
  },
  // Add more notices as needed
];

const NoticeBoard = () => {
  const [filteredNotices, setFilteredNotices] = useState(notices);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle filtering based on date or heading
  const handleFilter = (type, value) => {
    let filtered = [...notices];

    if (type === 'date' && value !== 'All Dates') {
      filtered = notices.filter(notice => notice.date === value);
    } else if (type === 'heading') {
      filtered = notices.filter(notice =>
        notice.heading.toLowerCase().includes(value.toLowerCase())
      );
    }

    setFilteredNotices(filtered);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Notice Board</h1>

      {/* Filter Section */}
      <div className="flex justify-center mb-4">
        <div className="mr-4">
          <label className="font-bold">Filter by Date:</label>
          <select
            onChange={e => handleFilter('date', e.target.value)}
            className="ml-2 p-1 border border-black rounded"
          >
            <option value="All Dates">All Dates</option>
            {/* Assuming dates can be dynamically fetched from notices */}
            {Array.from(new Set(notices.map(notice => notice.date))).map((date, index) => (
              <option key={index} value={date}>
                {date}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="font-bold">Filter by Heading:</label>
          <input
            type="text"
            onChange={e => handleFilter('heading', e.target.value)}
            className="ml-2 p-1 border border-black rounded"
            placeholder="Search by heading..."
          />
        </div>
      </div>

      {/* Notice Table */}
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
            {filteredNotices.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No notices found.
                </td>
              </tr>
            ) : (
              filteredNotices.map((notice, index) => (
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
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NoticeBoard;
