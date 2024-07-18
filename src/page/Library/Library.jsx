import React from 'react';
import BookTable from './LibraryTable';

const books = [
  {
    bookName: 'Book 1',
    writerName: 'Writer 1',
    pdfUrl: 'https://example.com/book1.pdf',
  },
  {
    bookName: 'Book 2',
    writerName: 'Writer 2',
    pdfUrl: 'https://example.com/book2.pdf',
  },
  // Add more books as needed
];

function Library() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Book Library</h1>
      <BookTable books={books} />
    </div>
  );
}

export default Library;
