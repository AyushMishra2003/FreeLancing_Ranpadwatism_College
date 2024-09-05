import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsByCategory } from '../redux/slices/postDataSlice'; // Adjust path as needed

const LibraryPage = () => {
    const dispatch = useDispatch();
    const { library, status } = useSelector((state) => state.postData);

    const [filteredBooks, setFilteredBooks] = useState([]);
    const [searchTitle, setSearchTitle] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        // Fetch book data when component mounts
        const fetchData = async () => {
            await dispatch(fetchPostsByCategory(7)); // Adjust category ID if needed
        };
        fetchData();
    }, [dispatch]);

    useEffect(() => {
        // Filter books based on the search title
        let filtered = library ? [...library] : []; // Create a shallow copy of the array

        if (searchTitle) {
            filtered = filtered.filter((book) =>
                book.acf.name.toLowerCase().includes(searchTitle.toLowerCase())
            );
        }

        setFilteredBooks(filtered);
    }, [searchTitle, library]);

    if (status === "loading") {
        return (
            <div className="flex items-center justify-center min-h-[70vh] bg-gradient-to-b from-white to-blue-100">
                <p className="text-lg text-gray-500">Loading...</p>
            </div>
        );
    }

    return (
        <div className="container p-4 mx-auto">
            <h1 className="mb-4 text-2xl font-bold text-center">Library</h1>

            {/* Filter Input */}
            <div className="mb-4">
                <label className="block mb-2 text-lg font-medium">Search by Book Name:</label>
                <input
                    type="text"
                    value={searchTitle}
                    onChange={(e) => setSearchTitle(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded shadow-sm"
                    placeholder="Enter book name..."
                />
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full overflow-hidden bg-white rounded-lg shadow-md">
                    <thead className="bg-[#0D9488] text-white">
                        <tr>
                            <th className="hidden px-4 py-2 md:table-cell">S.No</th>
                            <th className="px-4 py-2">Book Name</th>
                            <th className="px-4 py-2">Writer Name</th>
                            <th className="px-4 py-2">PDF</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {filteredBooks.length > 0 ? (
                            filteredBooks.map((book, index) => (
                                <tr key={index} className="border-b">
                                    <td className="hidden px-4 py-3 md:table-cell">{index + 1}</td>
                                    <td className="px-4 py-3">{book.acf.name}</td>
                                    <td className="px-4 py-3">{book.acf.writer}</td>
                                    <td className="px-4 py-3">
                                        <a
                                            href={book.custom_file}
                                            className="text-blue-500 underline hover:text-blue-600"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            PDF Link
                                        </a>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="px-4 py-3 text-center text-gray-500">
                                    No books found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LibraryPage;
