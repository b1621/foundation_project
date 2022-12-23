import React from "react";

function Navigation() {
  let navList = ["Home", "About", "Contact Us"].map((nav) => {
    return <p className="mx-2"> {nav} </p>;
  });
  return (
    <div className="container border p-3 flex justify-between">
      <div>
        <h3 className=" text-slate-700 text-xl">Navigation</h3>
      </div>

      <div className="flex">{navList}</div>
      <div>
        <button className="border border-green-800 px-2 rounded-sm">
          Donate
        </button>
      </div>
    </div>
  );
}

export default Navigation;
