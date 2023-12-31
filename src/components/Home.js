import React from "react";
import Header from "./Header";
import BannerSection from "./BannerSection";
import Restaurants from "./Restaurants";
import Footer from "./Footer";
import RestaurantsHeader from "./RestaurantsHeader";
import LoginPage from "./LoginPage";
import { useSelector } from "react-redux";

export default function () {
  const showAuthPage = useSelector((state) => state.showAuthPage);

  return (
    <>
      {showAuthPage ? (
        <div>
          <div style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.40)",
              zIndex: 10,
            }}>

          </div>
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
            <BannerSection />
            <RestaurantsHeader />
            <Restaurants />
            <Footer />
          </div>
        </div>
      ):(
        <div>
          <Header />
          <BannerSection />
          <RestaurantsHeader />
          <Restaurants />
          <Footer />
        </div>
      )}
    </>
  );
}
