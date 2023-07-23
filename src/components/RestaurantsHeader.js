import { AdjustmentsIcon } from "@heroicons/react/outline";
import React from "react";

function RestaurantsHeader() {
  return (
    <div  className="flex items-end h-24 px-7 mb-6 m-auto sticky top-0 bg-white shadow-md">
      <div className="flex flex-grow  border border-t-0 border-x-0 border-b-1 pb-3 border-gray-200">
        <h1 className="font-semibold text-3xl">14 restaurants</h1>
      </div>
      <navBar className="flex flex-grow items-center justify-end space-x-7 text-gray-500 border border-t-0 border-x-0 border-b-1 pb-3 border-gray-200">
        <p className="hover:cursor-pointer hover:text-gray-700">Relevance</p>
        <p className="hover:cursor-pointer hover:text-gray-700">Delivery Time</p>
        <p className="hover:cursor-pointer hover:text-gray-700">Rating</p>
        <p className="hover:cursor-pointer hover:text-gray-700">Cost: Low To High</p>
        <p className="hover:cursor-pointer hover:text-gray-700">Cost: High To Low</p>
        <div className="flex items-center space-x-3">
          <p className="hover:cursor-pointer hover:text-gray-700">Filters</p>
          <AdjustmentsIcon className="h-8 w-8 text-orange-500 rounded-full bg-white border p-1 hover:cursor-pointer border-orange-500 " />
        </div>
      </navBar>
    </div>
  );
}

export default RestaurantsHeader;
