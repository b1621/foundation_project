import React from 'react';
import Footer from './Footer';
import Contact from './Home/Contact';
import DemoAbout from './Home/DemoAbout';

function Home() {
  return (
    <div class="flex flex-col w-full ">
      <div class="w-full h-[640px] bg-hero bg-center bg-no-repeat bg-cover bg-black">
        <div
          className="bg-gray-900 bg-opacity-50 text-center"
          style={{ width: '100%', height: '100%' }}
        >
          <div className=" w-full ">
            <div className="h-[632px] flex flex-col items-center justify-center relative mx-auto">
              <h1 className="text-5xl mt-2 text-white tracking-wider">
                Together we will go beyond belief{' '}
              </h1>
              <p className="text-white my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati unde officia maiores error ab sed,
              </p>
              <button className="bg-green-500 duration-500  font-[poppins] text-white  py-3 px-10 hover:bg-green-600 rounded mt-3">
                Donate Now!
              </button>
            </div>
          </div>
        </div>
        <DemoAbout />
        <Contact />
        <div class="p-10 w-full h-[500px] bg-blue-700">Some content</div>
        <div class="p-10 w-full h-[500px] bg-green-500">Some content</div>
        <div class="mt-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
