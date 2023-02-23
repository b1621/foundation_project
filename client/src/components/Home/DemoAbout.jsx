import React from 'react';

function DemoAbout() {
  return (
    <div id="about" className="min-h-[500px] flex items-center">
      <div className=" w-[710px] mx-auto mb-6 text-center text-slate-700">
        <h2 className="text-4xl mb-4">
          Join the most ambitious health campaign in history
        </h2>
        <p className="my-3">
          We are raising for Eye concer to bring world-leading cancer care
          closer to home
        </p>
        <div>
          <button className="bg-green-500 transition-all ease-in duration-700  font-[poppins] text-white  py-3 px-10 hover:bg-green-700 hover:border hover:border-green-700  rounded mt-3 mr-10">
            Join Us!
          </button>
          <button className="border border-green-500 transition-all ease-in duration-700  font-[poppins] text-green-500  py-3 px-10 hover:bg-green-500 hover:text-white rounded mt-3">
            Reed More!
          </button>
        </div>
      </div>
    </div>
  );
}

export default DemoAbout;
