import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-sky-400 text-white font-bold p-5 w-full">
      <div className="flex justify-end items-center">
        <div className="sm:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        <div
          className={`flex-col sm:flex-row ${
            isOpen ? "flex" : "hidden"
          } sm:flex sm:justify-end sm:items-center w-full sm:w-auto`}
        >
          <p className="ml-5 mr-8 pt-3 hover:text-sky-200 transition duration-300 ease-in-out">
            Our Customers
          </p>
          <p className="ml-5 mr-8 pt-3 hover:text-sky-200 transition duration-300 ease-in-out">
            SpArts Advantage
          </p>
          <p className="ml-5 mr-8 pt-3 hover:text-sky-200 transition duration-300 ease-in-out">
            Contact Us
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
