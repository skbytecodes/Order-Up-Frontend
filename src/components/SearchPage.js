import React, { useState } from "react";
import Header from "./Header";
import { SearchIcon, XIcon } from "@heroicons/react/outline";
import axios from "axios";

function SearchPage() {
  const parentUrl = window.globalPrentUrl;
  const [length, setLength] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [searcheditems, setSearchedItems] = useState([]);

  const inputChanged = async (e) => {
    const currentval = e.target.value;
    setInputValue(currentval);
    setLength(currentval.length);
    if (currentval != null && currentval.length > 0) {
      const response = await axios.get(
        `${parentUrl}/api/v1/findRestaurant/${currentval}`
      );
      setSearchedItems(response.data);
    }
  };

  return (
    <div>
       <Header />
      <div className="h-max">
        <div className="h-12 mt-12 flex items-center justify-center px-4 space-x-1 w-8/12 m-auto border border-gray-400 rounded-md">
          <input
            className="outline-none text-gray-500"
            type="text"
            placeholder="Search for restaurants and food"
            style={{ width: "100%" }}
            value={inputValue}
            onChange={inputChanged}
          />
          <div>
            {length <= 0 || inputValue == "" ? (
              <SearchIcon
                height={18}
                className="text-gray-500 hover:cursor-pointer"
              />
            ) : (
              <XIcon
                height={18}
                className="text-gray-500 hover:cursor-pointer"
                onClick={() => {
                  setInputValue("");
                }}
              />
            )}
          </div>
        </div>
        <div className="w-8/12 m-auto mt-10">
          <div className="mb-3">
            <p className="font-bold text-lg">Popular Cuisines</p>
          </div>
          {length <= 0 || inputValue == "" ? (
            <div
              className="flex overflow-x-scroll space-x-4 "
              id="cuisine_scrollbar"
            >
              <img
                className="h-24 w-20"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/b4ff78ecc5b8b66f732dd06228916d65"
              />
              <img
                className="h-24 w-20"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/3df4fca020027e89b89c733cdffc4966"
              />
              <img
                className="h-24 w-20"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/5dd234f7decdac4b4f71a2ff1408e10f"
              />
              <img
                className="h-24 w-20"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/e76b511935016406e6ebc11dd7593387"
              />
              <img
                className="h-24 w-20"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/87664acb0f9dd95d10a549bb8190ab27"
              />
              <img
                className="h-24 w-20"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/89f3fec702aef5acbb51a6cbc284b3f7"
              />
              <img
                className="h-24 w-20"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/31f03222ea978aef3b10d386729eb076"
              />
              <img
                className="h-24 w-20"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/c170aa4262ec0d191642f42a3a03b4ce"
              />
              <img
                className="h-24 w-20"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/0b5ffa32a04d99c1f212d2aacefd5f6f"
              />
              <img
                className="h-24 w-20"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/36184033ebef97d27a85fa3af5c1d403"
              />
              <img
                className="h-24 w-20"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/d0884e09ef431ee610e54a0bb2dfecd5"
              />
            </div>
          ) : (
            <div className="flex flex-col justify-evenly">
              <div className="flex space-x-2  items-center py-2 pl-1 hover:cursor-pointer hover:bg-slate-100">
                <img
                  className="h-16 w-16 rounded-md"
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/2de801ea3cca829108b5c19c5b26fd8b"
                />
                <div>
                  <p className="text-gray-700 text-sm">Kadai Paneer</p>
                  <p className="text-gray-500 text-sm">Dish</p>
                </div>
              </div>

              <div className="flex space-x-2  items-center py-2 pl-1 hover:cursor-pointer hover:bg-slate-100">
                <img
                  className="h-16 w-16 rounded-md"
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/2e7b12985f537721f651c245f328daaf"
                />
                <div>
                  <p className="text-gray-700 text-sm">Kadai Chawal</p>
                  <p className="text-gray-500 text-sm">Dish</p>
                </div>
              </div>

              <div className="flex space-x-2  items-center py-2 pl-1 hover:cursor-pointer hover:bg-slate-100">
                <img
                  className="h-16 w-16 rounded-md"
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/sfwqlnvbyrrmv1icnfvm"
                />
                <div>
                  <p className="text-gray-700 text-sm">Kadai Chicken</p>
                  <p className="text-gray-500 text-sm">Dish</p>
                </div>
              </div>

              <div className="flex space-x-2  items-center py-2 pl-1 hover:cursor-pointer hover:bg-slate-100">
                <img
                  className="h-16 w-16 rounded-md"
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/jqzxrej6sgzsaf0oobnp"
                />
                <div>
                  <p className="text-gray-700 text-sm">Kadi Chawal</p>
                  <p className="text-gray-500 text-sm">Dish</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
