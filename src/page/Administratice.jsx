import React, { useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'; // Import AliceCarousel styles
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsByCategory } from '../redux/slices/postDataSlice';

const AdministrativePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  const { faculty, administrative, status } = useSelector((state) => state.postData);

  const fetchData = async () => {
    await dispatch(fetchPostsByCategory(9));
    await dispatch(fetchPostsByCategory(10));
  };

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  const renderFacultyData = () => {
    return faculty?.map((item, index) => (
      <div key={index} className="flex flex-col items-center p-4 rounded-lg shadow-[3px_3px_10px_#808080] m-2">
        <img src={item.custom_file} alt={item.acf.name} className="object-cover w-32 h-32 mb-4 border-4 border-orange-700 rounded-full" />
        <p className="text-lg font-semibold">{item.acf.name}</p>
        <p className="text-md">{item.acf.designation}</p>
      </div>
    ));
  };

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-[90vh] bg-gradient-to-b from-white to-blue-100">
        <p className="text-lg text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-4 text-black bg-gradient-to-b from-white to-blue-100">
      <h1 className="mb-8 text-3xl font-bold text-orange-700">Administrative Team</h1>

      <div className="flex flex-col items-center justify-around w-full mb-8 md:flex-row">
        {administrative?.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={member?.custom_file}
              alt={member?.acf?.name}
              className="object-cover w-40 h-40 mb-4 border-4 border-orange-700 rounded-full"
            />
            <p className="text-xl font-semibold">{member.acf.name}</p>
            <p className="text-center text-md">{member.acf.designation}</p>
          </div>
        ))}
      </div>

      <h2 className="mb-4 text-2xl font-bold text-orange-700">Our Faculty</h2>
      <AliceCarousel
        autoPlay
        autoPlayInterval={3000}
        infinite
        items={renderFacultyData()}
        responsive={{
          0: { items: 1 },
          600: { items: 2 },
          1024: { items: 3 },
        }}
      />
    </div>
  );
}

export default AdministrativePage;
