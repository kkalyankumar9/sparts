import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-amber-400 flex flex-col justify-center items-center h-72 p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="mb-7 text-center">
          <p className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            Stay Updated
          </p>
          <p className="text-white mb-4">
            Get the latest updates on academies near you!
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full max-w-md">
          <input
            type="email"
            placeholder="E-mail"
            className="p-2 rounded-md border border-gray-300 bg-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 w-full sm:w-2/3"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-1/3">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
