import React from "react";
import OffersHeader from "./OffersHeader";
import Footer from "./Footer";
import Restaurants from "./Restaurants";
import { AdjustmentsIcon, ChevronDownIcon } from "@heroicons/react/outline";

function Offers() {
  return (
    <div>
      <OffersHeader />
      <div
        className=" m-auto flex flex-col  justify-around"
        style={{ height: "22vh", width: "73%", marginTop:"7vh"}}
      >
        <p className="text-gray-500">Home/Offers</p>
        <p className="font-bold text-2xl">Restaurants With Great Offers Near Me</p>
        {/* <div className=" bg-green-300 flex items-center justify-around"> */}

        <div
          className="flex  items-center justify-between text-gray-500"
          style={{ width: "100%", fontSize:"14px"}}
        >
          <div
            className="flex items-center space-x-2 bg-gray-100 px-6 py-2 border border-gray-200"
            style={{ borderRadius: "18px" }}
          >
            <p>Filter</p>
            <AdjustmentsIcon className="h-4 w-4" />
          </div>
          <div
            className="flex items-center justify-center space-x-2 bg-gray-100 border border-gray-200 px-3 py-2"
            style={{ borderRadius: "18px" }}
          >
            <p>Sort By</p>
            <ChevronDownIcon className="h-4 w-4" color="rgb(241, 87, 0)" />
          </div>
          <div
            className=" bg-gray-100  border border-gray-200 px-6 py-2"
            style={{ borderRadius: "18px" }}
          >
            <p>New on Swiggy</p>
          </div>

          <div
            className="bg-gray-100 border border-gray-200 px-6 py-2"
            style={{ borderRadius: "18px" }}
          >
            <p>rating 4.0+</p>
          </div>

          <div
            className=" bg-gray-100 border border-gray-200 px-6 py-2"
            style={{ borderRadius: "18px" }}
          >
            <p>Offers</p>
          </div>

          <div
            className=" bg-gray-100 border border-gray-200 px-6 py-2"
            style={{ borderRadius: "18px" }}
          >
            <p>Rs.300-Rs.600</p>
          </div>

          <div
            className="bg-gray-100 px-6 py-2"
            style={{ borderRadius: "18px" }}
          >
            <p>Less than 300</p>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="m-auto" style={{width:"80vw"}}>
      <Restaurants />
      </div>
     
      <Footer />
    </div>
  );
}

export default Offers;
