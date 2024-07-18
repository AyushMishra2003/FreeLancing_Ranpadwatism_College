import React, { useEffect } from 'react';

const BookTable = ({ books }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-[#0D9488] text-white">
              <tr>
                <th className="py-2 px-4 hidden md:table-cell">S.No</th>
                <th className="py-2 px-4">Book Name</th>
                <th className="py-2 px-4">Writer Name</th>
                <th className="py-2 px-4">PDF</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {books.map((book, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3 px-4 hidden md:table-cell">{index + 1}</td>
                  <td className="py-3 px-4">{book.bookName}</td>
                  <td className="py-3 px-4">{book.writerName}</td>
                  <td className="py-3 px-4">
                    <a
                      href={book.pdfUrl}
                      className="text-blue-500 hover:text-blue-600 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      PDF Link
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
};

export default BookTable;
