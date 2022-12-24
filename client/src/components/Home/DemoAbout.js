import React from 'react';

function DemoAbout() {
  return (
    <div id="about">
      <div className="border border-gray-300 w-[650px] mx-auto py-6 text-center">
        <h2 className="text-4xl">
          Join the most ambitious health campaign in history
        </h2>
        <p>
          We are raising for Eye concer to bring world-leading cancer care
          closer to home
        </p>
        <div>
          <button className="bg-green-500 duration-500  font-[poppins] text-white  py-3 px-10 hover:bg-green-600 rounded mt-3">
            Donate Now!
          </button>
          <button className="bg-green-500 duration-500  font-[poppins] text-white  py-3 px-10 hover:bg-green-600 rounded mt-3">
            Donate Now!
          </button>
        </div>
      </div>
    </div>
  );
}

export default DemoAbout;
