import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-amber-400  flex flex-col  justify-center items-center   h-72 ">
        <div className="mb-7">
          <p className="text-white text-4xl font-bold mb-2">Stay Updated</p>
          <p className="text-white mb-4">
            Get the latest updates on academies near you!
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="email"
            placeholder="E-mail"
            className="p-2 rounded-md border border-gray-300  bg-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 w-96"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
