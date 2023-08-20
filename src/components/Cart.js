import React from "react";
import EmptyCart from "../images/emptyCart.jpg";
import EmptyCartPNG from "../images/emptyCartPNG.png";
import Roll from "../images/roll.webp";

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
        className="bg-gray-200 flex justify-around"
        style={{ minHeight: "140vh", paddingTop: "5vh" }}
      >
        <div className="w-7/12 flex flex-col justify-between" style={{height:"100vh"}}>
          <div
            className="bg-white flex flex-col justify-evenly pl-10"
            style={{ height: "27vh" }}
          >
            <p className="font-semibold text-lg">
              Oops, something went wrong. Please clear your cart and try again.
            </p>
            <p className="bg-orange-500 text-white font-semibold w-fit px-5 py-2">
              RETRY
            </p>
          </div>

          <div
            className="bg-white flex justify-around items-center"
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
                <div className="border px-8 py-2 text-center" style={{borderColor:"#60b246" , color:"#60b246"}}>
                  <p className="text-xs">Have an account?</p>
                  <p className="font-semibold" style={{ fontSize: "13px" }}>
                    LOG IN
                  </p>
                </div>

                <div className="px-8 py-2 text-center text-white ml-7" style={{backgroundColor:"#60b246"}}>
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
          </div>

          <div className="bg-white flex items-center p-9" style={{height:"10vh"}}>
            <p className="font-bold text-gray-400">Delivery address</p>
          </div>

          <div className="bg-white flex items-center p-9" style={{height:"10vh"}}>
            <p className="font-bold text-gray-400">Payment</p>
          </div>
        </div>

        {/* cart section */}

        <div className="w-4/12">
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
        </div>
      </div>
    </>
  );
}

export default Cart;
