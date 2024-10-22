import React from "react";
import InputCard from "../globalComponents/inputCard";
import info from "../assets/icons/info.svg";
const PageOne = () => {
  return (
    <>
      <h1 className="mx-10 mt-1 text-xl font-semibold capitalize ">
        create new object
      </h1>
      <div className="max-w-5xl px-16 ml-10 border-2 rounded-lg">
        <h1 className="mt-10 text-lg text-blue-600 capitalize ">
          custom object information
        </h1>
        <div className="flex gap-5">
          <InputCard />
          <InputCard />
          <InputCard />
        </div>
        <div className="flex gap-2 my-3">
          <input type="checkbox" className="w-5" />
          <h1 className="">Start with vowel sound</h1>
        </div>
        <div className="p-2 border-2 rounded-lg">
          <div className="flex justify-between">
            <h1>Description</h1>
            <img src={info} alt="info" className="w-5 text-red-700" />
          </div>
          <textarea
            placeholder="Enter message here"
            className="w-full p-2 mt-1 border-2 rounded-lg"
          />
        </div>
        <div className="py-5">
          <input type="radio" id="2" className="mr-2" />
          Open the standard Xstudio.com Help & training window
          <input type="radio" id="2" className="ml-16 mr-2" />
          open a window using a Visualforce page
        </div>
      </div>
    </>
  );
};

export default PageOne;
