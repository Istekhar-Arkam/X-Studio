import React from "react";
import SecondNavbar from "./second-navbar";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full h-auto px-4 py-1 ">
        <div className="flex">
          <div className="flex items-center gap-2 px-3 text-2xl capitalize">
            <h1 className="px-1 font-semibold text-white bg-blue-500">X</h1>
            <h1 className="text-3xl font-semibold text-blue-500">studio</h1>
          </div>

          <form className="relative ml-2 form">
            <button className="absolute p-2 -translate-y-1/2 left-2 top-1/2">
              <svg
                width="17"
                height="16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-labelledby="search"
                className="w-5 h-5 text-blue-500"
              >
                <path
                  d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                  stroke="currentColor"
                  strokeWidth="1.333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <input
              className="px-10 py-3 placeholder-gray-400 transition-all duration-300 border-2 border-transparent rounded-lg shadow-md input focus:outline-none focus:border-blue-500"
              placeholder="Search here..."
              required=""
              type="text"
            />
            <button
              type="reset"
              className="absolute p-1 -translate-y-1/2 right-3 top-1/2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </form>
        </div>
        <div className="flex gap-8 px-8 text-lg font-semibold text-gray-500 capitalize cursor-pointer">
          <p className="hover:text-blue-500">home</p>
          <p className="hover:text-blue-500">object manager</p>
          <p className="hover:text-blue-500">contact us</p>
        </div>
      </div>
      <SecondNavbar />
    </>
  );
};

export default Navbar;
