import React from 'react';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram, FaGoogle, FaApple } from 'react-icons/fa';

const ContactPageTest = () => {
  return (
    <div className="contact_container mt-[150px] pb-[80px] border-b border-[#ebebeb]">
      <div className="row flex items-start justify-center">
        <div className="col-lg-6 contact_col px-4">
          <div className="contact_contents pr-8">
            <h1 className="text-4xl font-medium">Contact Us</h1>
            <p className="text-base font-normal mb-0 mt-[22px] w-[30rem]">
              There are many ways to contact us. You may drop us a line, give us a call or send an email, choose what suits you the most.
            </p>
            <div className="mt-[39px]">
              <p>(800) 686-6688</p>
              <p>info.admizzershope@gmail.com</p>
            </div>
            <div className="mt-[22px]">
              <p>Open hours: 8.00-18.00 Mon-Fri</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <div className="follow_us_contents mt-[32px]">
            <h1 className="text-4xl font-medium">Follow Us</h1>
            <ul className="social flex flex-row mt-[20px] border border-red-500">
              <li className="mr-3 last:mr-0">
                <a href="#" className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#3a61c9] transition-transform transform hover:-translate-y-1 hover:shadow-lg">
                  <FaFacebookF className="text-white" />
                </a>
              </li>
              <li className="mr-3 last:mr-0">
                <a href="#" className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#41a1f6] transition-transform transform hover:-translate-y-1 hover:shadow-lg">
                  <FaTwitter className="text-white" />
                </a>
              </li>
              <li className="mr-3 last:mr-0">
                <a href="#" className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#fb4343] transition-transform transform hover:-translate-y-1 hover:shadow-lg">
                  <FaGooglePlusG className="text-white" />
                </a>
              </li>
              <li className="mr-3 last:mr-0">
                <a href="#" className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#8f6247] transition-transform transform hover:-translate-y-1 hover:shadow-lg">
                  <FaInstagram className="text-white" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-lg-6 get_in_touch_col mt-[40px] md:mt-[0] px-4">
          <div className="get_in_touch_contents bg-[#83ad8d1f] py-[14%] px-[2%] mt-[5%]">
            <h2 className="text-center text-2xl uppercase">Login page</h2>
            <form id="submit-form_2" action="" className="mt-[5%]">
              <label htmlFor="email">E-mail or username</label><br />
              <input type="email" id="email" name="email" className="w-full p-3 border border-[#fe4c50] mt-1 mb-4" /> <br />
              <label htmlFor="password">Password</label><br />
              <input type="password" id="password" name="password" className="w-full p-3 border border-[#fe4c50] mt-1 mb-4" /> <br />
              <input type="submit" value="Login" className="bg-black text-white py-3 px-12 cursor-pointer" />
            </form>
            <div className="text-center mt-4">
              <a className="text-success" href="creat-ac.html">Create an account?</a>
            </div>
            <div className="flex justify-center mt-4">
              <hr className="w-[90px]" />
              <p className="px-3">or</p>
              <hr className="w-[90px]" />
            </div>
            <div className="container mt-4">
              <div className="row text-center flex items-center">
                <div className="flex items-center gap-3 justify-center">
                  <FaGoogle className="text-2xl mx-2" />
                  <FaFacebookF className="text-2xl mx-2" />
                  <FaApple className="text-2xl mx-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPageTest;
