import React from "react";
import { RiMenu2Line } from "react-icons/ri";
import { IoAddOutline } from "react-icons/io5";
import Home from "../pages/home";


const SecondNavbar = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full h-auto px-4 py-4 text-white bg-blue-500">
        <div className="flex items-center gap-4 px-4 text-xl cursor-pointer">
          <p>
            <RiMenu2Line />
          </p>
          <div className="flex text-lg font-semibold capitalize gap-9">
            <p>object manager</p>
            <p>account</p>
            <p>field & relationships</p>
          </div>
        </div>
        <div className="mr-4 text-2xl bg-blue-600 cursor-pointer">
          <IoAddOutline />
        </div>
      </div>
     <Home/>
    </>
  );
};

export default SecondNavbar;
