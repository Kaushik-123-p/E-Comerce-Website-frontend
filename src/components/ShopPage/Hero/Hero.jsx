import React from "react";
import hand_icon from "../../assets/hand_icon.png";
import arrow from "../../assets/arrow.png";
import hero_image from "../../assets/hero_image.png";
import "../../../Pages/Shop/Shop.css";
const Hero = () => {
  return (
    <div className="hero flex h-screen  bg-gradient-to-b from-pink-200 to-green-100/10  hide-scrollbar ">
      {/* Hero left  start */}
      <div
        className="hero_left flex-1 flex flex-col justify-center gap-5
       pl-44 leading-[1.1]"
      >
        <h2 className="text-gray-900 text-2xl font-semibold">
          NEW ARRIVALS ONLY
        </h2>
        <div>
          <div className="hand-icon flex items-center gap-4">
            <p className="text-gray-800 text-6xl font-bold">new</p>
            <img src={hand_icon} alt="" className="w-24" />
          </div>
          <p className="text-gray-800 text-6xl font-bold">collections</p>
          <p className="text-gray-800 text-6xl font-bold">for everyone</p>
        </div>
        <div className="pt-12">
          <div className="hero-latest-btn flex justify-center items-center gap-4 mt-8  text-white w-72 h-14 rounded-full bg-red-500 text-lg font-medium hover:bg-red-500 hover:text-white active:bg-white active:text-gray-600 hover:scale-105 transition duration-600">
            <div>Latest Collection</div>
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
      {/* Hero left  end */}

      {/* Hero right  start */}
      <div className="hero-right flex-1 flex items-center justify-center h-fit">
        <img src={hero_image} alt="" className="w-[450px]" />
      </div>
      {/* Hero rigth  end */}
    </div>
  );
};

export default Hero;
