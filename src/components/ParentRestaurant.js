import React from "react";
import Restaurants from "./Restaurants";
import RestaurantsHeader from "./RestaurantsHeader";
import Footer from "./Footer";
import Header from "./Header";
import { showAuthPage } from "./actions/swiggyActions";
import LoginPage from "./LoginPage";
import { useSelector } from "react-redux";

function ParentRestaurant() {
  const showAuthPage = useSelector((state) => state.showAuthPage);
  return (
    <>
      {showAuthPage ? (
        <div>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.40)",
              zIndex: 10,
            }}
          ></div>
          <LoginPage isOpen={1} />
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
          >
            <Header />
            <RestaurantsHeader />
            <Restaurants />
            <Footer />
          </div>
        </div>
      ) : (
        <div>
          <Header />
          <RestaurantsHeader />
          <Restaurants />
          <Footer />
        </div>
      )}

      {/* <Header />
      <RestaurantsHeader />
      <Restaurants />
      <Footer /> */}
    </>
  );
}

export default ParentRestaurant;
