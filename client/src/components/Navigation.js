import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const navData = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Blogs',
    href: '/Blogs',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];
function Sample2() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sticky top-0 z-30">
      <nav
        className="w-full shadow bg-white "
        style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px ' }}
      >
        <div className="flex justify-between items-center">
          <div className="container mx-auto py-3 flex justify-between items-center">
            <span className="cursor-pointer text-2xl text-slate-700">
              <img
                src="./images/a-website-favicon-color.png"
                className="h-10 inline"
                alt="icon"
              />
              Foundation
            </span>
            <nav className="hidden md:flex space-x-12 items-center transition-all ease-in duration-500 mx-3">
              {navData.map((n) => {
                return (
                  <Link
                    key={n.name}
                    to={n.href}
                    className="hover:text-green-500 duration-500 text-slate-800"
                  >
                    {n.name}
                  </Link>
                );
              })}
              <button className="bg-green-500 duration-500  font-[poppins] text-white  py-3 px-10 hover:bg-green-600 rounded">
                Donate
              </button>
            </nav>
          </div>
          <div>
            <span
              className="text-3xl cursor-pointer mx-2 md:hidden block"
              onClick={() => setIsOpen(!isOpen)}
            >
              <ion-icon name={isOpen ? 'menu' : 'close'}></ion-icon>
            </span>
          </div>
        </div>
        <div className="md:hidden flex justify-between items-center transition-all ease-in duration-500">
          {isOpen ? (
            <div className="transition-all ease-in duration-500"></div>
          ) : (
            <div className="w-full ">
              <nav className="flex flex-col ">
                {navData.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="py-2 px-4 border-b border-gray-200 hover:bg-slate-100"
                  >
                    {item.name}
                  </a>
                ))}
                <button className="bg-green-500 duration-500  font-[poppins] text-white py-2 px-6 hover:bg-green-600 rounded">
                  Donate
                </button>
              </nav>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Sample2;
