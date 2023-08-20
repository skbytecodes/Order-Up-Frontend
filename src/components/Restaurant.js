import { StarIcon } from "@heroicons/react/outline";
import React from "react";

function Restaurant({ image, title, type, rating, time, price }) {
  return (
    <div className="p-5 max-h-full mb-10 hover:shadow-xl hover:outline outline-1 outline-gray-300 cursor-pointer ">
      <div className="flex justify-center">
        <img className="h-40 w-64" src={image} />
      </div>
      <div className="w-64 mt-4">
        <p className="font-semibold">{title}</p>
        <p className="text-xs text-gray-500">{type}</p>
      </div>
      <div className="flex items-center justify-between mt-5 text-xs border border-x-0 border-t-0 pb-3">
        <div
          className="p-1 pr-2 flex items-center space-x-1 text-white"
          style={{ backgroundColor: "#48c479" }}
        >
          {/* style={{ color: "white" }}  */}
          <StarIcon height={10} style={{ fill: "white" }} />
          <p>{rating}</p>
        </div>

        <div>
          <p>. {time} MINS .</p>
        </div>
        <div>
          <p>&#8377; {price}</p>
        </div>
      </div>
      {/* <div className="text-center mt-4">
        <p className="text-gray-500 font-semibold text-sm">QUICK VIEW</p>
      </div> */}
    </div>
  );
}

export default Restaurant;
