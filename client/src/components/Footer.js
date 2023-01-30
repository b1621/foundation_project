import React from 'react';
import { FaTelegram } from 'react-icons/fa';
import { GrFacebookOption, GrTwitter, GrInstagram } from 'react-icons/gr';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';

function Footer() {
  return (
    <>
      <footer className="w-full bg-slate-800 relative  text-white min-h-[470px]">
        <div className="container mx-auto items-center font font-sans ">
          <div className="flex flex-col md:flex-row py-20 justify-center text-lg ">
            <div className="mx-7">
              <p>Logo</p>
            </div>
            <div className="mx-10">
              <p>feature</p>
              <p>About Us</p>
              <p>Testimonials</p>
              <p>latest Blogs</p>
              <p>Contact Us</p>
            </div>
            <div className="mx-10">
              <p className="text-2xl mb-3">Contact Information</p>
              <p className="flex flex-row">
                <BsTelephone className="text-green-500 mt-2" />{' '}
                <span className="px-2 ">0945622031</span>
              </p>
              <p className="flex flex-row my-2">
                <AiOutlineMail className="text-green-500 mt-2" />{' '}
                <span className="px-2 ">demo@email.com</span>
              </p>
              <p className="flex flex-row  align-bottom">
                <CiLocationOn className="text-green-500 mt-2" />{' '}
                <span className="px-2 ">Ethiopia, Addis Ababa</span>
              </p>
            </div>

            {/* <div className="text-green-500">Subscribe to Newsletter</div> */}
            <div className="mx-7">
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
