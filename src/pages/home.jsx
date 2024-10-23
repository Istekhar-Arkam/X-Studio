import React from "react";
import InputCard from "../globalComponents/inputCard";
import info from "../assets/icons/info.svg";

const Home = () => {
  return (
    <>
   <h1 className="p-4 mx-10 mt-1 text-xl font-semibold capitalize">
        create new object
      </h1>
      <div className="max-w-5xl px-16 ml-10 border-2 rounded-lg">
        <h1 className="pt-4 pb-4 text-lg text-blue-600 capitalize">
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
            <img src={info} alt="info" className="w-4 text-red-700" />
          </div>
          <textarea
            placeholder="Enter message here"
            className="w-full p-2 mt-1 border-2 rounded-lg"
          />
        </div>
        <div className="flex py-5 text-sm">
          <input type="radio" id="2" className="mr-2" />
          <p>Open the standard Xstudio.com Help & training window</p>
          <input type="radio" id="2" className="ml-16 mr-2" />
         <p> open a window using a Visualforce page</p>
        </div>
      </div>

      <div className="h-auto max-w-5xl p-3 mx-10 mt-3 border-2 rounded-lg">
       <h1 className="mb-1 font-medium text-blue-500 capitalize text-md mx-11">enter record name label and format</h1>
       <p className="text-sm mx-11">The Record Name appears in page layouts, key lists, related lists, lookups, and search results. For example, the Record Name for Account is "Account Name" and for Case it is "Case Number". Note that the Record Name field is always called "Name" when referenced via the API.</p> 
       <div className="flex gap-5 mt-3 mx-11">
        <InputCard/>
        <InputCard/>
       </div>
       </div>
       <div className="max-w-5xl gap-3 p-3 mx-10 mt-3 mb-10 capitalize border-2 rounded-lg">
        <h1 className="font-medium text-blue-500 text-md mx-11">optional feature</h1>
        <div className="flex gap-2 mt-7">
        <input type="checkbox" className="w-5 text-blue-400 ml-11" />
        <p>Allow reports</p>
        <input type="checkbox" className="w-5 text-blue-400 ml-11" />
        <p>Allow activites</p>
        <input type="checkbox" className="w-5 text-blue-400 ml-11" />
        <p>track field history</p>
        <input type="checkbox" className="w-5 text-blue-400 ml-11" />
        <p>enable licensing</p>
        <img src={info} alt="info-icon" className="h-4" />
       </div>
       
       </div>
    </>
  );
};

export default Home;
