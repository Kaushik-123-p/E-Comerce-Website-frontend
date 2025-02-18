import React from "react";
import arrow_icon from "../assets/breadcrum_arrow.png";

const Breadcrum = (props) => {
  const { product } = props;

  return (
    <div className="breadcrum flex items-center w-[85%] gap-2 text-gray-600 text-[16px] font-semibold  capitalize py-7 px-2  ">
      HOME <img src={arrow_icon} alt="" />
      SHOP <img src={arrow_icon} alt="" />
      {product.category} <img src={arrow_icon} alt="" />
      {product.name}
    </div>
  );
};

export default Breadcrum;
