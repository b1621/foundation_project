import React from 'react';

function Footer() {
  return (
    <>
      <footer className="w-full bg-slate-800 relative  text-white min-h-[570px]">
        <div className="container mx-auto ">
          <div className="flex flex-col md:flex-row">
            <div>contact</div>
            <div>feature</div>
            <div className="text-green-500">Subscribe to Newsletter</div>
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
