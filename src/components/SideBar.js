import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function SideBar() {
  const [activeLink, setActiveLink] = useState("");
  return (
    <div
      className="w-72 flex flex-col justify-start text-gray-700 space-y-1 pt-6"
      style={{ backgroundColor: "#edf1f7", height:"60vh"}}
    >
      <Link
        to="/help/issues/partner-onboarding"
        onClick={() => {
          setActiveLink("Partner Onboarding");
        }}
      >
        <div
          className={`py-4 pl-10 hover:text-gray-900 hover:cursor-pointer ${
            activeLink == "Partner Onboarding" ? "bg-white" : "bg-none"
          }`}
        >
          <p>Partner Onboarding</p>
        </div>
      </Link>

      <Link
        to="/help/issues/legal"
        onClick={() => {
          setActiveLink("Legal");
        }}
      >
        <div
          className={`py-4 pl-10 hover:text-gray-900 hover:cursor-pointer ${
            activeLink == "Legal" ? "bg-white" : "bg-none"
          }`}
        >
          <p>Legal</p>
        </div>
      </Link>

      <Link
        to="/help/issues/FAQ"
        onClick={() => {
          setActiveLink("FAQs");
        }}
      >
        <div
          className={`py-4 pl-10 hover:text-gray-900 hover:cursor-pointer ${
            activeLink == "FAQs" ? "bg-white" : "bg-none"
          }`}
        >
          <p>FAQs</p>
        </div>
      </Link>
    </div>
  );
}

export default SideBar;
