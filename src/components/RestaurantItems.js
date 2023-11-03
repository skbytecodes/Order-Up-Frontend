import {
  ChevronDownIcon,
  SearchIcon,
  StarIcon,
} from "@heroicons/react/outline";
import CategoryIcon from "@mui/icons-material/Category";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { addItem, cartTotalValue, removeItem } from "./actions/swiggyActions";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Link } from "react-router-dom";

function RestaurantItems() {
  const [items, setItems] = useState([]);
  const parentUrl = window.globalPrentUrl;
  const publicImagePath = window.publicImagePath;

  const dispatch = useDispatch();
  const selectedRestaurant = useSelector((state) => state.selectedItem);
  const cartItems = useSelector((state) => state.cartItems.items);
  console.log("cartitems are ", cartItems);
  const [cartItemsState, setCartItemsState] = useState(cartItems);
 
  let itemsTotalAmount = useSelector((state) => state.totalItemsAmount);
  console.log("cartItemsState ", cartItemsState);

  useEffect(() => {
    async function fetchSelectedItem() {
      const response = await axios.get(
        `${parentUrl}/api/v1/restaurants/food/${selectedRestaurant}`
      );
      setItems(response.data);
    }
    fetchSelectedItem();
    setCartItemsState(cartItems);
  }, [cartItems]);

  const pushItem = async (item) => {
    dispatch(addItem({ foodId: item.food_id, count: 1 }));
    const response = await axios.get(
      `${parentUrl}/api/v1/foodById/${item.food_id}`
    );
    itemsTotalAmount = itemsTotalAmount + response.data.foodPrice;
    dispatch(cartTotalValue(itemsTotalAmount));
    // setCartItemsState(cartItems);
  };

  const pullItem =async (item) => {
    dispatch(removeItem({ foodId: item.food_id }));
    const response = await axios.get(
      `${parentUrl}/api/v1/foodById/${item.food_id}`
    );
    itemsTotalAmount = itemsTotalAmount - response.data.foodPrice;
    if(itemsTotalAmount <= 0){
      dispatch(cartTotalValue(0));
    }else{
      dispatch(cartTotalValue(itemsTotalAmount));
    }
    // setCartItemsState(cartItems);
  };

  return (
    <div className="">
      <div
        className="m-auto flex justify-between items-center "
        style={{ width: "75%", height: "8vh" }}
      >
        <div>
          <p style={{ fontSize: "10px" }}>Home / Delhi / KFC</p>
        </div>
        <div>
          <SearchIcon
            height={18}
            className="text-gray-500 hover:cursor-pointer"
          />
        </div>
      </div>

      <div className="m-auto pl-4" style={{ width: "75%" }}>
        <div
          className=" flex justify-between items-center border-dotted border-b-2 border-gray-400"
          style={{ height: "15vh" }}
        >
          <div className="space-y-1">
            <p className="font-bold">KFC</p>
            <p className=" text-gray-500" style={{ fontSize: "12px" }}>
              Burger, Biryani
            </p>
            <p className=" text-gray-500" style={{ fontSize: "12px" }}>
              Saket, 0.4 km
            </p>
          </div>

          <div
            className=" border h-16 flex flex-col justify-center space-y-2 px-2 shadow-sm"
            style={{ borderRadius: "4px" }}
          >
            <div
              className="flex justify-center space-x-1 items-center"
              style={{ marginBottom: "2px" }}
            >
              <StarIcon
                height={15}
                style={{ fill: "#3d9b6d", color: "#3d9b6d" }}
              />
              <p
                className="font-bold"
                style={{ fontSize: "14px", color: "#3d9b6d" }}
              >
                {" "}
                4.0
              </p>
            </div>
            <p className="text-gray-500" style={{ fontSize: "10px" }}>
              1k+ ratings
            </p>
          </div>
        </div>
      </div>

      {/* items */}
      {items.map((item) => (
        <div className="m-auto pl-4" style={{ height: "33vh", width: "75%" }}>
          <div
            className="flex flex-col border-gray-400"
            style={{ height: "100%" }}
          >
            <div className="flex justify-between items-center mt-4 mb-4">
              <p className="font-bold">{item.category_name}</p>
              <ChevronDownIcon
                className="h-5 w-5 hover:cursor-pointer"
                color="gray"
              />
            </div>

            <div className="flex justify-between items-center">
              <div className="">
                <CategoryIcon fontSize="9px" sx={{ color: "#60b246" }} />
                {/* food name */}
                <p className="font-semibold mb-1 text-gray-700">
                  {item.food_name}
                </p>
                <div
                  style={{ fontSize: "13px" }}
                  className="flex justify-start items-center space-x-2"
                >
                  <p className="font-semibold">&#8377; {item.food_price.toFixed(2)}</p>{" "}
                  <span
                    className="px-1"
                    style={{
                      fontSize: "10px",
                      borderLeft: "1px solid",
                      color: "rgb(219, 103, 66)",
                      backgroundColor: "rgb(250, 232, 227)",
                    }}
                  >
                    {" "}
                    20% OFF | USE SWIGGYIT
                  </span>
                </div>
                <p className="text-gray-500 mt-3" style={{ fontSize: "13px" }}>
                  {item.description}
                </p>
              </div>

              <div className="relative">
                <div
                  className="hover:cursor-pointer"
                  style={{ height: "15vh", width: "10vw" }}
                >
                  <img
                    src={`${publicImagePath}/${item.image_name}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </div>

                <div
                  className="text-center absolute"
                  style={{ top: "70px", left: "27px" }}
                >
                  <div
                    className="bg-white w-20 flex items-center font-semibold justify-around py-1 space-x-1 border hover:ring-1 transition duration-300 transform hover:cursor-pointer hover:ring-stone-200"
                    style={{
                      borderRadius: "4px",
                      color: "#60b246",
                      fontSize: "14px",
                    }}
                  >
                    <RemoveIcon
                      onClick={() => {
                        pullItem(item);
                      }}
                      sx={{ color: "gray", fontSize: "14px" }}
                      className=""
                    />

                    {cartItemsState.findIndex(
                      (foo) => foo.foodId === item.food_id
                    ) !== -1 ? (
                      <p id={item.food_id}>
                        {cartItemsState
                          .find((foo) => foo.foodId === item.food_id)
                          .count.toString()}
                      </p>
                    ) : (
                      <p id={item.food_id}>0</p>
                    )}

                    <AddIcon
                      onClick={() => {
                        pushItem(item);
                      }}
                      sx={{ color: "green", fontSize: "14px" }}
                    />
                  </div>
                  <p className="text-gray-400" style={{ fontSize: "10px" }}>
                    Customisable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div
        className="bg-gray-100 text-gray-600 px-5"
        style={{
          height: "50vh",
          width: "76%",
          fontSize: "13px",
          marginLeft: "161px",
        }}
      >
        <div className="flex items-center h-14 space-x-3 border border-b-gray-400 border-x-0">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_120,h_60/fssai_final_edss9i"
            height="60px"
            width="60px"
          />
          <p className="mt-2">License No. 13321010000774</p>
        </div>

        <div className=" mt-2">
          <p className=" font-semibold">BIG Burger 247</p>
          <p>(Outlet:East of Kailash)</p>
          <div className="flex items-center space-x-1 mt-2">
            <RoomOutlinedIcon sx={{ fontSize: "14px" }} />
            <p>
              198/49, 1st Floor(right side), Ramesh Market, East of Kailash, New
              Delhi, DEFENCE COLONY, South East, Delhi-110065
            </p>
          </div>
        </div>
      </div>
      <Link to="/cart">
      <div
        className="h-10 m-auto sticky bottom-1 flex items-center justify-between px-3 font-bold hover:cursor-pointer"
        style={{
          height: "8vh",
          width: "76%",
          fontSize: "15px",
          marginLeft: "161px",
          backgroundColor: "#60b246",
          color: "white",
        }}
      >
        <div>2 items | &#8377;{itemsTotalAmount.toFixed(2)}</div>
        <div className="flex items-center justify-center space-x-1">
          <p className="mt-1 ">VIEW CART</p> <ShoppingBagOutlinedIcon />
        </div>
      </div>
      </Link>
    </div>
  );
}

export default RestaurantItems;
