import { StarIcon } from "@heroicons/react/outline";
import React from "react";

function Restaurant({ image, title, type, rating, time, price }) {
  return (
    <div className="p-5 max-h-fit mb-10  hover:shadow-xl hover:outline outline-1 outline-gray-300 cursor-pointer">
      <div className="flex justify-center">
        <img className="h-40 w-64" src={image} />
      </div>
      <div className="w-64 mt-4">
        <p className="font-semibold">{title}</p>
        <p className="text-xs text-gray-500">{type}</p>
      </div>
      <div className=" flex items-center justify-between mt-5 text-xs border border-x-0 border-t-0 border-b pb-3">
        <div
          className="p-1 flex items-center space-x-1 text-white"
          style={{ backgroundColor: "#48c479" }}
        >
          <StarIcon height={10} style={{ color: "white" }} />
          <p>{rating}</p>
        </div>

        <div>
          <p>. {time} MINS .</p>
        </div>
        <div>
          <p>&#8377; {price}</p>
        </div>
      </div>

      <div className="mt-1 font-semibold text-center">
        <p className="hover:text-red-800" style={{ fontSize: "12px", color: "#5d8ed5" }}>QUICK VIEW</p>
      </div>
    </div>
  );
}

export default Restaurant;
