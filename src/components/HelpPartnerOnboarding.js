import React, { useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";

function HelpPartnerOnboarding() {
  const [chevIcon, setChevIcon] = useState("down");
  const [docList, setDocList] = useState("down");
  
  return (
    <div>
       <Header />
      <div
        className="h-40 flex justify-center flex-col pl-10 text-white"
        style={{ backgroundColor: "#37718e" }}
      >
        <p className="text-3xl font-bold">Help & Support</p>
        <p>Let's take a step ahead and help you better.</p>
      </div>
      <div className="flex">
        <SideBar />
        <div className="pt-6 mx-auto" style={{ width: "70%" }}>
          <div className="h-14 flex items-center font-bold text-2xl">
            <p>Partner Onboarding</p>
          </div>
          <div className="border border-b-slate-300 border-x-0 border-t-0 pb-5">
            <div className="flex justify-between pt-5">
              <p className="hover:text-orange-500 hover:cursor-pointer">
                I want to partner my restaurant with Swiggy
              </p>
              {chevIcon == "down" ? (
                <ChevronDownIcon
                  className="h-5 w-5 hover:cursor-pointer"
                  color="gray"
                  onClick={() => {
                    setChevIcon("up");
                  }}
                />
              ) : (
                <ChevronUpIcon
                  className="h-5 w-5 hover:cursor-pointer"
                  color="gray"
                  onClick={() => {
                    setChevIcon("down");
                  }}
                />
              )}
            </div>
            {chevIcon == "up" ? (
              <div className="mt-4">
                <p
                  className="text-sm  hover:text-black mb-4 text-orange-600 font-bold hover:cursor-pointer"
                  style={{ fontSize: "13px" }}
                >
                  Partner with us
                </p>
                <div className="">
                  <p className="py-2 px-4 text-sm font-bold border text-orange-600 border-orange-600 w-fit hover:cursor-pointer">
                    SEND AN EMAIL
                  </p>
                  <p
                    className="text-gray-400 pl-1 pt-1"
                    style={{ fontSize: "10px" }}
                  >
                    We will revert within 24-48 hrs
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="border border-b-slate-300 border-x-0 border-t-0 pb-5">
            <div className="flex justify-between pt-5">
              <p className="hover:text-orange-500 hover:cursor-pointer">
                What are the mandatory documents needed to list my restaurant on
                Swiggy?
              </p>
              {docList == "down" ? (
                <ChevronDownIcon
                  className="h-5 w-5 hover:cursor-pointer"
                  color="gray"
                  onClick={() => {
                    setDocList("up");
                  }}
                />
              ) : (
                <ChevronUpIcon
                  className="h-5 w-5 hover:cursor-pointer"
                  color="gray"
                  onClick={() => {
                    setDocList("down");
                  }}
                />
              )}
            </div>
            {docList == "up" ? (
              <div className="mt-4">
                <p
                  className="text-sm  hover:text-black mb-2 hover:cursor-pointer"
                  style={{ fontSize: "13px" }}
                >
                  - Copies of the below documents are mandatory
                </p>
                <p
                  className="text-sm  hover:text-black mb-2 hover:cursor-pointer"
                  style={{ fontSize: "13px" }}
                >
                  - Pan Card
                </p>
                <p
                  className="text-sm  hover:text-black mb-2 hover:cursor-pointer"
                  style={{ fontSize: "13px" }}
                >
                  - GSTIN Certificate
                </p>
                <p
                  className="text-sm  hover:text-black mb-2 hover:cursor-pointer"
                  style={{ fontSize: "13px" }}
                >
                  - Cancelled Cheque OR bank Passbook
                </p>
                <p
                  className="text-sm  hover:text-black mb-2 hover:cursor-pointer"
                  style={{ fontSize: "13px" }}
                >
                  - Menu
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpPartnerOnboarding;
