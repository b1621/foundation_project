import React from 'react';
import { FaTelegram } from 'react-icons/fa';
import { GrFacebookOption, GrTwitter, GrInstagram } from 'react-icons/gr';

function Footer() {
  return (
    <>
      <footer className="w-full bg-slate-800 relative  text-white min-h-[570px]">
        <div className="container mx-auto ">
          <div className="flex flex-col md:flex-row py-20">
            <div>
              <p>Our mission</p>
            </div>
            <div>
              <p>contact Info</p>
              <p>Address :Ethiopia Addis Ababa</p>
              <p>Phone: +1114562231</p>
              <p>Eamil: demo@email.com</p>
            </div>
            <div>
              <p>feature</p>
              <p>About Us</p>
              <p>Testimonials</p>
              <p>latest Blogs</p>
              <p>Contact Us</p>
            </div>
            <div className="text-green-500">Subscribe to Newsletter</div>
            <div>
              <p>Follow Us</p>
              <div className="flex flex-row justify-around mt-3">
                <p className="mx-1 hover:text-green-500 hover:cursor-pointer">
                  <GrFacebookOption />
                </p>
                <p className="mx-1 hover:text-green-500 hover:cursor-pointer">
                  <GrTwitter />
                </p>
                <p className="mx-1 hover:text-green-500 hover:cursor-pointer">
                  <GrInstagram />
                </p>
                <p className="mx-1 hover:text-green-500 hover:cursor-pointer">
                  <FaTelegram />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 py-5 w-3/4 mx-auto text-center text-gray-400  border-t border-gray-400">
          Copyright ©2022 All rights reserved
        </div>
      </footer>
    </>
  );
}

export default Footer;
