import React from "react";
import exclusive_image from "../../assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[85%] h-[66vh] flex items-center mx-auto px-[140px] mb-[190px] bg-gradient-to-r from-pink-200 to-green-100">
        <div className="offers-left flex-1 flex flex-col justify-center  ">
          <h1 className="text-gray-900 text-6xl font-semibold">Exclusive</h1>
          <h1 className="text-gray-900 text-6xl font-semibold">
            Offers For You
          </h1>
          <p className="text-gray-900 text-md font-semibold">
            ONLY ON BEST SELLERS PRODUCRS
          </p>
          <div className="pt-12">
            <button className="w-64 h-12  rounded-full bg-red-500 border-none text-white text-[22px] font-semibold  cursor-pointer hover:bg-red-500 hover:text-white active:bg-white active:text-gray-600 hover:scale-105 transition duration-600">
              Check Now
            </button>
          </div>
        </div>
        <div className="offers-right flex-1 flex items-center justify-end pt-12">
          <img src={exclusive_image} alt="" className="w-[295px]" />
        </div>
      </div>
    </div>
  );
};

export default Offers;
