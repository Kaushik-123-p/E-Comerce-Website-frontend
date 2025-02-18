import React from "react";
import Hero from "../../components/ShopPage/Hero/Hero";
import Popular from "../../components/ShopPage/Propular/Propupar";
import Offers from "../../components/ShopPage/Offers/Offers";
import NewCollections from "../../components/ShopPage/NewCollections/NewCollections";
import NewsLetter from "../../components/ShopPage/NewsLetter/NewsLetter";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="hide-scrollbar">
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
};

export default Shop;
