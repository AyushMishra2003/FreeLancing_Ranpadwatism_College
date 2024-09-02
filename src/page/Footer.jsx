import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaSkype, FaPinterest } from 'react-icons/fa';

const TestFooter = () => {
  return (
    <footer className="footer bg-gray-100 py-6">
      <div className="container mx-auto">
        <div className="row flex flex-col lg:flex-row justify-between items-center">
          {/* Navigation Links */}
          <div className="col-lg-6 mb-4 lg:mb-0">
            <div className="footer_nav_container flex flex-col sm:flex-row items-center justify-center lg:justify-start text-center">
              <ul className="footer_nav flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-10">
                <li><a href="#" className="text-gray-700 hover:text-red-500 transition duration-300">Blog</a></li>
                <li><a href="#" className="text-gray-700 hover:text-red-500 transition duration-300">FAQs</a></li>
                <li><a href="contact.html" className="text-gray-700 hover:text-red-500 transition duration-300">Contact us</a></li>
              </ul>
            </div>
          </div>
          {/* Social Media Links */}
          <div className="col-lg-6">
            <div className="footer_social flex justify-center lg:justify-end items-center">
              <ul className="flex space-x-4">
                <li><a href="#" className="text-gray-700 hover:text-red-500 transition duration-300"><FaFacebook /></a></li>
                <li><a href="#" className="text-gray-700 hover:text-red-500 transition duration-300"><FaTwitter /></a></li>
                <li><a href="#" className="text-gray-700 hover:text-red-500 transition duration-300"><FaInstagram /></a></li>
                <li><a href="#" className="text-gray-700 hover:text-red-500 transition duration-300"><FaSkype /></a></li>
                <li><a href="#" className="text-gray-700 hover:text-red-500 transition duration-300"><FaPinterest /></a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* Footer Credits */}
        <div className="row mt-6">
          <div className="col-lg-12">
            <div className="footer_nav_container">
              <p className="text-center lg:text-right text-gray-700">
                All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TestFooter;
