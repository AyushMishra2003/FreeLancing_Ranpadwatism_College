import React, { useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import vcImage from '../assets/adminstrative/p1.jpg'; // Replace with actual images
import regImage from '../assets/adminstrative/p2.jpg';
import chairmanImage from '../assets/adminstrative/p3.png'; // Replace with actual images
import principalImage from '../assets/adminstrative/p4.jpeg'; // Replace with actual images
import faculty1Image from '../assets/adminstrative/p5.jpeg'; // Replace with actual images
import faculty2Image from '../assets/adminstrative/p6.jpeg'; // Replace with actual images
import faculty3Image from '../assets/adminstrative/p7.jpeg'; // Replace with actual images
import faculty4Image from '../assets/adminstrative/p8.jpeg'; // Replace with actual images
import faculty5Image from '../assets/adminstrative/p9.jpeg'; // Replace with actual 
import faculty6Image from '../assets/adminstrative/p10.jpeg'; // Replace with actual 
import faculty7Image from '../assets/adminstrative/p11.jpeg'; // Replace with actual 
import faculty8Image from '../assets/adminstrative/p12.jpeg'; // Replace with actual 
import faculty10Image from '../assets/adminstrative/p14.jpeg'; // Replace with actual 
import faculty11Image from '../assets/adminstrative/p15.jpeg'; // Replace with actual
import faculty12Image from '../assets/adminstrative/p16.jpeg'; // Replace with actu
import faculty13Image from '../assets/adminstrative/p17.jpeg'; // Replace with actu
import faculty14Image from '../assets/adminstrative/p18.jpg'; // Replace with actu

const AdministrativePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, [])
    const facultyData = [
        {name:"Dr. Kamlesh Jha",title:"Incharge Principal",image:faculty1Image},
        { name: 'Dr. Prakash Kumar Thakur', title: 'Associate Professor- Economics', image: faculty2Image },
        { name: 'Dr. Vijay Kumar Pandey', title: 'Associate Professor- Jyotish', image: faculty3Image },
        { name: 'Dr. Pramod Kumar Pathak', title: 'Associate Professor - Sarvdarshan', image: faculty4Image },
        { name: 'Shri Ratnesh Jha', title: 'Associate Professor - Hindi', image: faculty5Image },
        { name: 'Dr. Luxmi Kant Pathak', title: 'Associate Professor - History', image: faculty6Image },
        { name: 'Dr. Laxmi Narayan Upadhyay', title: 'Sr. Lecturer - Vyakaran', image: faculty7Image },
        { name: 'Dr. Prabhu Narayan Upadhyay', title: 'Associate Professor - Vyakaran', image: faculty8Image },
        { name: 'Shri Madhupnath Jha', title: 'P.G.T. History', image: faculty10Image },
        { name: 'Dr. Vivekanand Jha', title: 'P.G.T. Sociology', image: faculty11Image },
        { name: 'Shri Amarnath Thakur', title: 'Assistant', image: faculty12Image },
        { name: 'Shri Kanhaiya Jha', title: 'Accountant', image: faculty13Image },
        { name: 'Dr. Nishyand Upadhyay', title: 'Assistant Librarian', image: faculty14Image }, 
    ];

    const renderFacultyData = () => {
        return facultyData.map((item, index) => (
          <div key={index} className="flex flex-col items-center  p-4 rounded-lg shadow-[3px_3px_10px_#808080] m-2">
            <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-orange-700" />
            <p className="text-lg font-semibold">{item.name}</p>
            <p className="text-md">{item.title}</p>
          </div>
        ));
      };

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-white to-blue-100 text-black p-4">
      <h1 className="text-3xl font-bold text-orange-700 mb-8">Administrative Team</h1>

      <div className="w-full flex flex-col md:flex-row justify-around items-center mb-8">
        <div className="flex flex-col items-center">
          <img src={vcImage} alt="Vice-Chancellor" className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-orange-700" />
          <p className="text-xl font-semibold">Shri Dharmendra Pradhan</p>
          <p className="text-md text-center">Chancellor</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={regImage} alt="Registrar" className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-orange-700" />
          <p className="text-xl font-semibold">Prof. Shrinivasa Varakhedi</p>
          <p className="text-md text-center">Honorable Vice-Chancellor Central Sanskrit University</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={chairmanImage} alt="Chairman" className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-orange-700" />
          <p className="text-xl font-semibold">Prof. R.G. Murali Krishna
         </p>
          <p className="text-md text-center">Registrar I/c & Chief Vigilance Officer</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={principalImage} alt="Principal" className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-orange-700" />
          <p className="text-xl font-semibold">Prof. Lalit Kumar Tripathi


</p>
          <p className="text-md text-center">Sir Ganganath Jha Central Sanskrit University, Allahabad</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-orange-700 mb-4">Our Faculty</h2>
      <AliceCarousel
        autoPlay
        autoPlayInterval={3000}
        infinite
        // mouseTracking
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
