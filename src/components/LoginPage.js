import { XIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import RollIcon from "../images/roll.webp";
import { useDispatch, useSelector } from "react-redux";
import { hideAuthPage, showLoginForm } from "./actions/swiggyActions";
import { showSignupForm } from "./actions/swiggyActions";

function LoginPage({ isOpen }) {

  const [referral, setReferral] = useState(false);
  
  const authToggle = useSelector((state) => state.authToggle);
  const dispatch = useDispatch();

function HandleSignupDispatch(){
  dispatch(showSignupForm())
}

function HandleLoginDIispatch(){
  dispatch(showLoginForm())
}


  return (
    <div
      className='relative'
      style={{
        height: "100vh",
        zIndex: isOpen == 1 ? 10 : "",
        position: isOpen == 1 ? "fixed" : "",
        top: (isOpen = 1 ? "0%" : ""),
        right: (isOpen = 1 ? "0%" : ""),
        width: "100%",
        transform: 'translate(0%, 0%)',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
      }}
    >
      <div 
        className={`bg-white h-full px-5 absolute right-0 transition-transform ${isOpen ? 'right-0' : 'translate-x-full'} animate-slide-animation`}
        style={{ width: "35%" }}
      >
        <div className=" h-12 flex items-center ">
          <XIcon
            height={25}
            className="text-gray-500 hover:cursor-pointer ml-6 mt-8"
            onClick={()=> dispatch(hideAuthPage())}
          />
        </div>

        {authToggle == "SIGNUP" ? (
          <div className="m-auto" style={{ width: "85%" }}>
            <div className="flex h-28 justify-between items-center">
              <div className="h-2/3 flex flex-col justify-evenly">
                <p className="font-semibold text-3xl">Sign up</p>
                <div className="mt-2">
                  <span>or</span>{" "}
                  <span
                    className="text-orange-600 hover:cursor-pointer"
                    style={{ fontSize: "13px" }}
                    onClick={HandleSignupDispatch}
                  >
                    login to your account
                  </span>
                </div>
              </div>
              <div>
                <img src={RollIcon} style={{ height: "80px", width: "80px" }} />
              </div>
            </div>
            <div className="flex flex-col mt-7">
              <input
                type="text"
                placeholder="Phone number"
                className="outline-none p-5 border border-gray-400"
                style={{
                  borderTopLeftRadius: "2px",
                  borderTopRightRadius: "2px",
                }}
              />
              <input
                type="text"
                placeholder="Name"
                className="outline-none p-5 border border-gray-400 border-t-0"
              />
              <input
                type="email"
                placeholder="Email"
                className="outline-none p-5 border border-gray-400 border-t-0"
              />
              {referral ? 
              <input
                type="text"
                placeholder="Referral code"
                className="outline-none p-5 border border-gray-400 border-t-0"
                style={{
                  borderBottomLeftRadius: "2px",
                  borderBottomRightRadius: "2px",
                }}
              />
              :
              ""
              }
            </div>
            <p
              className="mt-6 font-semibold pl-1"
              style={{ fontSize: "14px", color: "#5d8ed5" }}
              onClick={() => {setReferral(true)}}
            >
              Have a referral code?{" "}
            </p>
            <p className="bg-orange-500 text-white py-3 text-center mt-4">
              CONTINUE
            </p>
            <p className="font-bold text-xs">
              By creating an account, I accept the Terms & Conditions & Privacy
              Policy
            </p>
          </div>
        ) : (
          <div className="m-auto" style={{ width: "85%" }}>
            <div className="flex h-28 justify-between items-center">
              <div className="h-2/3 flex flex-col justify-evenly">
                <p className="font-semibold text-3xl">Login</p>
                <div className="mt-2">
                  <span>or</span>{" "}
                  <span
                    className="text-orange-600 hover:cursor-pointer"
                    style={{ fontSize: "13px" }}
                    onClick={HandleLoginDIispatch}
                  >
                    create an account
                  </span>
                </div>
              </div>
              <div>
                <img src={RollIcon} style={{ height: "80px", width: "80px" }} />
              </div>
            </div>
            <input
                type="text"
                placeholder="Phone number"
                className="outline-none px-5 py-3 w-full border border-gray-400"
                style={{
                  borderTopLeftRadius: "2px",
                  borderTopRightRadius: "2px",
                }}
              />
            <p className="bg-orange-500 text-white py-3 text-center mt-4">
              CONTINUE
            </p>
            <p className="font-bold text-xs">
              By clicking on Login, I accept the Terms & Conditions & Privacy
              Policy
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
