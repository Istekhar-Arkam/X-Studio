import React from "react";
import info from "../assets/icons/info.svg";

const InputCard = () => {
  return (
    <>
      <div className="h-auto p-3 border-2 rounded max-w-fit">
        <div className="flex justify-between ">
          <h1>label</h1>
          <img src={info} alt="info-icon" className="h-5 bg-blue-500" />
        </div>
        <input
          type="text"
          className="h-10 px-2 border-2 border-blue-500 rounded "
          placeholder="Enter label name"
        />
      </div>
    </>
  );
};

export default InputCard;
