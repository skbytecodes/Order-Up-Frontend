import React from "react";
import Logo from "../images/swiggy-logo.png";
import {
  ArchiveIcon,
  BadgeCheckIcon,
  ChevronDownIcon,
  SearchIcon,
  SupportIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex items-center justify-between h-20 bg-white shadow-md">
      <div className="flex flex-1 items-center space-x-10">
        <Link to="/">
          <div className="pl-8">
            <img className="h-12 w-8" src={Logo} />
          </div>
        </Link>
        <div className="flex justify-around space-x-2 hover:cursor-pointer">
          <span className="font-bold underline underline-offset-8 text-sm hover:text-orange-500 cursor-pointer">
            {" "}
            Pushp Vihar{" "}
          </span>
          <span className="text-sm text-gray-500">
            Sector 7, Pushp Vihar, New Delhi...
          </span>
          <ChevronDownIcon className="h-5 w-5" color="orange" />
        </div>
      </div>

      <navBar className="flex flex-1 justify-evenly items-center hover:cursor-pointer text-gray-600">
        <div className="flex space-x-3 items-center">
          <SearchIcon class="h-5 w-5" />
          <span className="pb-1 font-semibold">Search</span>
        </div>

        <div className="flex space-x-2 items-center">
          <BadgeCheckIcon class="h-6 w-6" />
          <span className="font-semibold">Offers</span>
        </div>

        <div className="flex space-x-2 items-center">
          <SupportIcon class="h-6 w-6" />
          <span className="font-semibold">Help</span>
        </div>

        <div className="flex space-x-2 items-center">
          <UserIcon class="h-6 w-6" />
          <span className="font-semibold">Sign In</span>
        </div>

        <Link to="/restaurants">
          <div className="flex space-x-2 items-center">
            <ArchiveIcon class="h-6 w-6" />
            <span className="font-semibold">Cart</span>
          </div>
        </Link>
      </navBar>
    </header>
  );
}

export default Header;
