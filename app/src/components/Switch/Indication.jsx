import React from "react";

const Indication = ({ onClose }) => (
  <div className="mt-2 bg-black bg-opacity-80
  min-w-[100px] p-2 rounded z-50
  text-white text-sm flex items-center
  justify-between indication-container
  sm:max-w-[20px] fixed right-0 mr-6 lg:right-[calc((100vw-1100px)/2)]
  xs:text-xs max-w-[200px] ">
    Click me!!
    <button onClick={onClose}>✖️</button>
  </div>
);

export default Indication;
