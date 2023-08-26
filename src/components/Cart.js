import React from "react";
import EmptyCart from "../images/emptyCart.jpg";
import EmptyCartPNG from "../images/emptyCartPNG.png";
import Roll from "../images/roll.webp";
import { Wallet } from "@mui/icons-material";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import { UserIcon } from "@heroicons/react/outline";
import Cake from "../images/cake.jpg";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function Cart() {
  return (
    <>
      <div
        className="flex items-center justify-center"
        style={{ height: "87vh" }}
      >
        <div className="flex flex-col items-center">
          <img src={EmptyCart} className="h-64" />
          <p className="font-semibold mt-5 mb-1 text-lg">Your cart is empty</p>
          <p className="text-sm text-gray-600 mb-5">
            You can go to home page to view more restaurants
          </p>
          <p className="bg-orange-500 w-fit py-2 px-5 font-semibold text-white">
            SEE RESTAURANTS NEAR YOU
          </p>
        </div>
      </div>

      {/* secondsection */}

      <div
        className="bg-gray-200 relative flex justify-around"
        style={{ minHeight: "140vh", paddingTop: "5vh" }}
      >
        <div
          className="flex flex-col justify-between"
          style={{ height: "100vh", width: "63vw" }}
        >
          <div
            className="bg-white flex flex-col justify-evenly pl-10 ml-5"
            style={{ height: "27vh" }}
          >
            <p className="font-semibold text-lg">
              Oops, something went wrong. Please clear your cart and try again.
            </p>
            <p className="bg-orange-500 text-white font-semibold w-fit px-5 py-2">
              RETRY
            </p>
          </div>
          <div className="absolute top-20 left-5 bg-gray-600 p-2">
            <ReplayOutlinedIcon sx={{ color: "white" }} />
          </div>

          <div
            className="bg-white flex justify-around items-center ml-5"
            style={{ height: "32vh" }}
          >
            <div
              className="flex flex-col justify-between"
              style={{ height: "21vh" }}
            >
              <div>
                <p className="font-bold">Account</p>
                <p className="text-gray-400">
                  To place your order now, log in to your existing account or
                  sign up.
                </p>
              </div>

              <div className="flex">
                <div
                  className="border px-8 py-2 text-center"
                  style={{ borderColor: "#60b246", color: "#60b246" }}
                >
                  <p className="text-xs">Have an account?</p>
                  <p className="font-semibold" style={{ fontSize: "13px" }}>
                    LOG IN
                  </p>
                </div>

                <div
                  className="px-8 py-2 text-center text-white ml-7"
                  style={{ backgroundColor: "#60b246" }}
                >
                  <p className="text-xs">New to Swiggy?</p>
                  <p className="font-semibold" style={{ fontSize: "13px" }}>
                    SIGN UP
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img src={Roll} className="h-32" />
            </div>
            <div className="absolute top-30 left-5 bg-gray-600 p-2">
              <UserIcon height={26} style={{ color: "white" }} />
            </div>
          </div>

          <div
            className="bg-white flex items-center p-9 ml-5"
            style={{ height: "10vh" }}
          >
            <p className="font-bold text-gray-400">Delivery address</p>
          </div>

          <div
            className="absolute left-5 bg-gray-600 p-2"
            style={{ top: "463px", color: "white" }}
          >
            <RoomOutlinedIcon />
          </div>

          <div
            className="bg-white flex items-center p-9 ml-5"
            style={{ height: "10vh" }}
          >
            <p className="font-bold text-gray-400">Payment</p>
          </div>

          <div
            className="absolute left-5 bg-gray-600 p-2"
            style={{ top: "568px", color: "white" }}
          >
            <Wallet />
          </div>
        </div>

        {/* cart section */}

        {/* <div className="" style={{ height: "100vh", width: "28vw" }}>
          <div className=" flex flex-col justify-center items-center">
            <div className="" style={{ width: "100%", paddingLeft: "75px" }}>
              <p className="text-3xl font-bold text-gray-400 mb-5 ml-0">
                Cart Empty
              </p>
            </div>

            <img src={EmptyCartPNG} className="h-64 w-64 mb-2" />
            <p className="  text-sm text-gray-400" style={{ width: "60%" }}>
              Good food is always cooking! Go ahead, order some yummy items from
              the menu.
            </p>
          </div>
        </div> */}

        <div
          className="bg-white shadow-md space-y-5"
          style={{ width: "28vw", height: "fit-content" }}
        >
          <div className="flex items-center h-20 px-5 space-x-3 shadow-md">
            <img
              src={Cake}
              className=""
              style={{ height: "47px", width: "50px" }}
            />
            <div className="">
              <p className="font-semibold text-gray-700">Bakingo</p>
              <p className="text-gray-600" style={{ fontSize: "12px" }}>
                Shahpur Jat
              </p>
            </div>
          </div>

          {/* scroll */}
          <div
            className="overflow-y-scroll space-y-6"
            style={{ height: "60vh" }}
          >
            <div className="flex items-center px-5 justify-between">
              <div className="flex justify-between" style={{ width: "38%" }}>
                <RadioButtonCheckedIcon
                  sx={{
                    color: "green",
                    height: "13px",
                    width: "12px",
                    textAlign: "start",
                    marginTop: "2px",
                  }}
                />
                <div className="flex flex-col justify-start pt-0 ">
                  <p
                    className="font-semibold text-gray-700"
                    style={{ fontSize: "12px" }}
                  >
                    Black Forest Pastry
                  </p>
                  <div className="flex items-center">
                    <p
                      className="font-semibold text-gray-500"
                      style={{ fontSize: "11px" }}
                    >
                      Customize
                    </p>
                    <ArrowForwardIosIcon
                      sx={{ color: "orange", height: "8px" }}
                    />
                  </div>
                </div>
              </div>
              <div className=" flex items-center justify-around w-20 border border-gray-300 py-1">
                <RemoveIcon sx={{ color: "gray", fontSize: "14px" }} />
                <p
                  className="text-gray-500"
                  style={{ fontSize: "12px", color: "green" }}
                >
                  1
                </p>
                <AddIcon sx={{ color: "green", fontSize: "14px" }} />
              </div>

              <div className=" text-gray-500 flex" style={{ fontSize: "12px" }}>
                &#8377;<p>89</p>
              </div>
            </div>

            <div className="flex items-center px-5 justify-between">
              <div className="flex justify-between" style={{ width: "38%" }}>
                <RadioButtonCheckedIcon
                  sx={{
                    color: "green",
                    height: "13px",
                    width: "12px",
                    textAlign: "start",
                    marginTop: "2px",
                  }}
                />
                <div className="flex flex-col justify-start pt-0 ">
                  <p
                    className="font-semibold text-gray-700"
                    style={{ fontSize: "12px" }}
                  >
                    Black Forest Pastry
                  </p>
                  <div className="flex items-center">
                    <p
                      className="font-semibold text-gray-500"
                      style={{ fontSize: "11px" }}
                    >
                      Customize
                    </p>
                    <ArrowForwardIosIcon
                      sx={{ color: "orange", height: "8px" }}
                    />
                  </div>
                </div>
              </div>
              <div className=" flex items-center justify-around w-20 border border-gray-300 py-1">
                <RemoveIcon sx={{ color: "gray", fontSize: "14px" }} />
                <p
                  className="text-gray-500"
                  style={{ fontSize: "12px", color: "green" }}
                >
                  1
                </p>
                <AddIcon sx={{ color: "green", fontSize: "14px" }} />
              </div>

              <div className=" text-gray-500 flex" style={{ fontSize: "12px" }}>
                &#8377;<p>89</p>
              </div>
            </div>

            <div className="flex items-center px-5 justify-between">
              <div className="flex justify-between" style={{ width: "38%" }}>
                <RadioButtonCheckedIcon
                  sx={{
                    color: "green",
                    height: "13px",
                    width: "12px",
                    textAlign: "start",
                    marginTop: "2px",
                  }}
                />
                <div className="flex flex-col justify-start pt-0 ">
                  <p
                    className="font-semibold text-gray-700"
                    style={{ fontSize: "12px" }}
                  >
                    Black Forest Pastry
                  </p>
                  <div className="flex items-center">
                    <p
                      className="font-semibold text-gray-500"
                      style={{ fontSize: "11px" }}
                    >
                      Customize
                    </p>
                    <ArrowForwardIosIcon
                      sx={{ color: "orange", height: "8px" }}
                    />
                  </div>
                </div>
              </div>
              <div className=" flex items-center justify-around w-20 border border-gray-300 py-1">
                <RemoveIcon sx={{ color: "gray", fontSize: "14px" }} />
                <p
                  className="text-gray-500"
                  style={{ fontSize: "12px", color: "green" }}
                >
                  1
                </p>
                <AddIcon sx={{ color: "green", fontSize: "14px" }} />
              </div>

              <div className=" text-gray-500 flex" style={{ fontSize: "12px" }}>
                &#8377;<p>89</p>
              </div>
            </div>

            <div className="flex items-center px-5 justify-between">
              <div className="flex justify-between" style={{ width: "38%" }}>
                <RadioButtonCheckedIcon
                  sx={{
                    color: "green",
                    height: "13px",
                    width: "12px",
                    textAlign: "start",
                    marginTop: "2px",
                  }}
                />
                <div className="flex flex-col justify-start pt-0 ">
                  <p
                    className="font-semibold text-gray-700"
                    style={{ fontSize: "12px" }}
                  >
                    Black Forest Pastry
                  </p>
                  <div className="flex items-center">
                    <p
                      className="font-semibold text-gray-500"
                      style={{ fontSize: "11px" }}
                    >
                      Customize
                    </p>
                    <ArrowForwardIosIcon
                      sx={{ color: "orange", height: "8px" }}
                    />
                  </div>
                </div>
              </div>
              <div className=" flex items-center justify-around w-20 border border-gray-300 py-1">
                <RemoveIcon sx={{ color: "gray", fontSize: "14px" }} />
                <p
                  className="text-gray-500"
                  style={{ fontSize: "12px", color: "green" }}
                >
                  1
                </p>
                <AddIcon sx={{ color: "green", fontSize: "14px" }} />
              </div>

              <div className=" text-gray-500 flex" style={{ fontSize: "12px" }}>
                &#8377;<p>89</p>
              </div>
            </div>

            <div className="flex items-center px-5 justify-between">
              <div className="flex justify-between" style={{ width: "38%" }}>
                <RadioButtonCheckedIcon
                  sx={{
                    color: "green",
                    height: "13px",
                    width: "12px",
                    textAlign: "start",
                    marginTop: "2px",
                  }}
                />
                <div className="flex flex-col justify-start pt-0 ">
                  <p
                    className="font-semibold text-gray-700"
                    style={{ fontSize: "12px" }}
                  >
                    Black Forest Pastry
                  </p>
                  <div className="flex items-center">
                    <p
                      className="font-semibold text-gray-500"
                      style={{ fontSize: "11px" }}
                    >
                      Customize
                    </p>
                    <ArrowForwardIosIcon
                      sx={{ color: "orange", height: "8px" }}
                    />
                  </div>
                </div>
              </div>
              <div className=" flex items-center justify-around w-20 border border-gray-300 py-1">
                <RemoveIcon sx={{ color: "gray", fontSize: "14px" }} />
                <p
                  className="text-gray-500"
                  style={{ fontSize: "12px", color: "green" }}
                >
                  1
                </p>
                <AddIcon sx={{ color: "green", fontSize: "14px" }} />
              </div>

              <div className=" text-gray-500 flex" style={{ fontSize: "12px" }}>
                &#8377;<p>89</p>
              </div>
            </div>
            <div className="space-y-4 px-5">
              <div className=" bg-gray-50 py-3 pl-4" style={{ fontSize: "12px" , borderRadius:"5px"}}>
                &ldquo;
                <input
                className="h-7 bg-transparent ml-2"
                  type="text"
                  placeholder="Any suggestions? We will pass it on..."
                  style={{ width: "90%", outline: "none" }}
                />
              </div>
            </div>

            {/* Bills */}

            <div
              className="space-y-4 text-gray-600"
              style={{ fontSize: "12px" }}
            >
              <p
                className="font-semibold text-gray-800 px-5"
                style={{ fontSize: "12px" }}
              >
                Bill Details
              </p>
              <div className="flex items-center justify-between px-5">
                <p>Item Total</p>
                <div className="flex">
                  &#8377;<p>89</p>
                </div>
              </div>
              <div className="flex items-center justify-between px-5">
                <p>Delivery Fee | 5.8 kms</p>
                <div className="flex">
                  &#8377;<p>89</p>
                </div>
              </div>
              <div className=" flex items-center justify-between px-5">
                <p>Delivery Tip</p>
                <div className="flex">
                  &#8377;<p>89</p>
                </div>
              </div>
              <div className="flex items-center justify-between px-5">
                <p>Platform fee</p>
                <div className="flex">
                  &#8377;<p>89</p>
                </div>
              </div>
              <div className="flex items-center justify-between px-5">
                <p>GST and Restaurant Charges</p>
                <div className=" flex">
                  &#8377;<p>89</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="flex items-center h-14 px-5 justify-between shadow-md font-bold text-gray-800"
            style={{
              fontSize: "14px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <p className="">TO PAY</p>
            <div className="flex">
              &#8377;<p>89</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
