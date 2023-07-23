import React from "react";
import Restaurant from "./Restaurant";
import AnnaDosa from "../images/anna-ka-dosa.webp";
import BoomSandwich from "../images/boom-sandwich.webp";
import Burgrill from "../images/burgrill.webp";
import DesiMeals from "../images/desi-meals.webp";
import Delhi19 from "../images/dilli-19.jpeg";
import Dominos from "../images/dominos.webp";
import GloboIce from "../images/globo-icecream.webp";
import GoodFlippinBurger from "../images/good-flippin-burger.webp";
import HighwayToNorth from "../images/highway-to-north.webp";
import Kfc from "../images/kfc.jpeg";
import Mcdonalds from "../images/mcdonalds.webp";
import MozoPizza from "../images/mozo-pizza.webp";

function Restaurants() {
  return (
    <div className="flex justify-around max-h-fit">
      <Restaurant
        id={101}
        image={Kfc}
        title="Kfc"
        type="Burgers, Biryani, American, Snacks, Fast Food"
        rating={4.1}
        time={43}
        price={250}
      />

      <Restaurant
        id={102}
        image={MozoPizza}
        title="MozoPizza"
        type="Pizzas"
        rating={4.1}
        time={43}
        price={250}
      />

      <Restaurant
        id={103}
        image={DesiMeals}
        title="Mealy-Your Everyday Meal"
        type="North Indian, Street Food, Beverages, Desserts, Home Food"
        rating={4.1}
        time={43}
        price={250}
      />
      <Restaurant
        id={104}
        image={AnnaDosa}
        title="Anna Ka Dosa"
        type="South Indian, Indian"
        rating={4.1}
        time={43}
        price={250}
      />
    </div>
  );
}

export default Restaurants;
