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

          <form class="form relative ml-2">
            <button class="absolute left-2 -translate-y-1/2 top-1/2 p-2">
              <svg
                width="17"
                height="16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-labelledby="search"
                class="w-5 h-5 text-blue-500"
              >
                <path
                  d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                  stroke="currentColor"
                  stroke-width="1.333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <input
              class="input rounded-lg px-10 py-3 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md w-96"
              placeholder="Search here..."
              required=""
              type="text"
            />
            <button
              type="reset"
              class="absolute right-3 -translate-y-1/2 top-1/2 p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
