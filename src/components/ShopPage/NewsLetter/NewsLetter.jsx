import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="newsletter w-[85%] h-[50vh] flex flex-col items-center justify-center mx-auto px-[140px] mb-[150px] bg-gradient-to-b from-pink-200 to-green-100/10 gap-[30px]">
        <h1 className="text-gray-700 text-[55px] font-semibold">
          Get Exclusive Offers On Your Email
        </h1>
        <p className="text-gray-700 text-[20px]">
          Subscribe to our newsletter and stay update
        </p>
        <div className="flex items-center justify-center bg-white w-[730px] h-[70px] border border-gray-300 rounded-full overflow-hidden">
          <input
            type="email"
            placeholder="your Email id"
            name=""
            id=""
            className="w-[500px] h-full ml-[30px] border-none outline-none pl-12   text-gray-700 text-[16px] font-[Poppins] rounded-full "
          />
          <button className="w-[225px] h-[70px] rounded-full bg-black text-white  cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
