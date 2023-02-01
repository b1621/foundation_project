import { React } from 'react';

function ContactDemo() {
  return (
    <section className=" bg-slate-100" id="contact">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-sm">
        <h2 className="mb-4 text-4xl tracking-tight font-bold text-center text-gray-700">
          Contact Us
        </h2>

        <form className="space-y-8">
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-600 "
            >
              Full Name
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 shadow-sm focus:shadow-md focus:outline-none"
              placeholder="Abebe Kebede"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-600 "
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:shadow-lg block w-full p-2.5 focus:outline-none"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-600 "
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:shadow-md focus:outline-none "
              placeholder="Message..."
            ></textarea>
          </div>
          <button className="bg-green-500 duration-500  font-[poppins] text-white  py-3 px-10 hover:bg-green-600 rounded mt-3">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactDemo;
