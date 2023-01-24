import React from 'react';

function blog() {
  const box_shadow =
    'box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; color: red';
  return (
    <div className="border min-h-[500px]">
      <div className="my-6 w-[1000px] mx-auto font-serif">
        <h1 className="text-4xl text-center">Lattest Blogs</h1>
        <div className=" flex my-14">
          <div className="border mx-3 w-[450px]">
            <img src="images/eye.png" alt="" className="h-56 w-full" />
            <p>August 12, 2018 | Jhon </p>
            <h2>Symptoms of eye cancer</h2>
            <p>
              shadows, flashes of light, or wiggly lines in your vision. blurred
              vision. a dark patch in your eye that's getting bigger. partial or
              total loss of vision.
            </p>
          </div>
          <div className="border mx-3 w-[450px]">
            <img src="images/eye.png" alt="" className="h-56 w-full" />
            <p>August 12, 2018 | Jhon </p>
            <h2>Symptoms of eye cancer</h2>
            <p>
              shadows, flashes of light, or wiggly lines in your vision. blurred
              vision. a dark patch in your eye that's getting bigger. partial or
              total loss of vision.
            </p>
          </div>
          <div className="border mx-3 w-[450px]" style={{ box_shadow }}>
            <img src="images/eye.png" alt="" className="h-56 w-full" />
            <p>August 12, 2018 | Jhon </p>
            <h2>Symptoms of eye cancer</h2>
            <p>
              shadows, flashes of light, or wiggly lines in your vision. blurred
              vision. a dark patch in your eye that's getting bigger. partial or
              total loss of vision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default blog;
