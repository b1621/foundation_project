import React, { useState } from 'react';

function Navigation() {
  const [navbar, setNavbar] = useState(false);
  let navList = ['Home', 'Blog', 'About', 'Contact '].map((nav) => {
    return (
      <p className="mx-4 text-lg font-[muli] hover:text-green-500 duration-500 cursor-pointer my-6 md:my-0">
        {nav}
      </p>
    );
  });

  return (
    <nav className="w-full p-3 md:flex md:items-center md:justify-between shadow z-30 font-serif">
      <div className="flex justify-between items-center">
        <span className=" text-slate-700 text-2xl font-[Poppins] cursor-pointer">
          <img
            src="./images/a-website-favicon-color.png"
            className="h-10 inline mr-1"
            alt="fundation icon"
          />
          Foundation
        </span>
        <span
          className="text-3xl cursor-pointer mx-2 md:hidden block"
          onClick={() => setNavbar(!navbar)}
        >
          <ion-icon name={navbar ? 'menu' : 'close'}></ion-icon>
        </span>
      </div>

      <div className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
        {navList}
        <div>
          <button className="bg-green-500 duration-500  font-[poppins] text-white ml-6 py-2 px-6 hover:bg-green-600 rounded">
            Donate
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
