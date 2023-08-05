import React, { useEffect, useState } from "react";
import Restaurant from "./Restaurant";
import axios from "axios";

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const parentUrl = window.globalPrentUrl;
  const publicImagePath = window.publicImagePath;
  console.log("global is ", parentUrl);
  useEffect(() => {
    async function fetchRestaurants() {
      const response = await axios.get(`${parentUrl}/api/v1/restaurants`);
      console.log("response ", response);
      setRestaurants(response.data);
    }
    fetchRestaurants();
  }, [restaurants]);

  return (
    <div className="flex justify-around pt-7 max-h-fit">
      {restaurants.map((item) => (
        <Restaurant
          id={item.restaurantId}
          image={`${publicImagePath}${item.imageName}`}
          title={item.restaurantName}
          type={item.restaurantType}
          rating={4.1}
          time={43}
          price={250}
        />
      ))}
    </div>
  );
}

export default Restaurants;
