import React from "react";
import SwiggyTextImg from "../images/Swiggy_logo-PNG_lfcnxm.png";
import SendIcon from "@mui/icons-material/Send";
import { ChevronDownIcon, SearchIcon, XIcon } from "@heroicons/react/outline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

function OffersHeader() {
  return (
    <div>
      <div
        className="bg-white shadow-md flex items-center justify-center m-auto space-x-5"
        style={{ height: "15vh" }}
      >
        <Link to="/">
          <div className="mr-3">
            <img src={SwiggyTextImg} className="h-9 w-32" />
          </div>
        </Link>
        <div className="flex items-center justify-center space-x-2">
          <SendIcon sx={{ color: "rgb(241, 87, 0)" }} />
          {/* <p className="">Others</p>  */}
          <p className="font-semibold text-lg">Setup your precise location</p>
          {/* <p className="">Janpath Road Area, Motilal Nehru...</p> */}
          <ChevronDownIcon className="h-4 w-4" color="rgb(241, 87, 0)" />
        </div>
        <div className="h-12 flex items-center justify-center px-4 space-x-1 w-4/12 bg-gray-200 rounded-md">
          <input
            className="outline-none bg-gray-200"
            type="text"
            placeholder="Search for restaurants and food"
            style={{ width: "100%" }}
          />
          <div className="">
            <SearchIcon height={18} className="hover:cursor-pointer" />
          </div>
        </div>

        <div className="">
          <AccountCircleIcon sx={{ fontSize: 55, color: "#808080" }} />
        </div>
      </div>
    </div>
  );
}

export default OffersHeader;
