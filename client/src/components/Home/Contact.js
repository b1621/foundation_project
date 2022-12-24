import React from 'react';

function Contact() {
  const commonStyles = 'border p-2 m-2';
  return (
    <div
      id="contact"
      className="min-h-[500px] flex items-center justify-center bg-slate-50"
    >
      <div className="border bg-white">
        <p>CONTACT US</p>
        <form>
          <div>
            <input
              type="text"
              name=""
              value=""
              placeholder="First Name"
              className={commonStyles}
            />
            <input
              type="text"
              name=""
              value=""
              placeholder="Last Name"
              className={commonStyles}
            />
          </div>
          <div className="w-full" style={{ width: '100%' }}>
            <input
              type="email"
              name=""
              value=""
              placeholder="Email"
              className={'w-full ' + commonStyles}
            />
          </div>
          <textarea
            rows=""
            cols=""
            placeholder="Message"
            className={'w-full ' + commonStyles}
          ></textarea>
          <button className="bg-green-500 duration-500  font-[poppins] text-white  py-3 px-10 hover:bg-green-600 rounded mt-3">
            Donate Now!
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
