import React from "react";

const DescriptionBox = () => {
  return (
    <div className="description  w-[85%] pt-[100px] pb-20 ">
      <div className="des-navigator flex   ">
        <div className="des-nav-box  flex items-center justify-center  w-[130px] h-[50px] text-gray-500 font-semibold border border-gray-500 ">
          Description
        </div>
        <div className="des-nav-box fade flex items-center justify-center w-[130px] h-[50px] text-gray-500 font-semibold border  border-gray-500">
          Reviews (122)
        </div>
      </div>
      <div className="desc-boc-decsription flex flex-col items-center justify-center  p-8  gap-5  text-gray-500 border border-gray-500 ">
        <p>
          An e-commerce website is a digital platform that offers a seamless
          shopping experience for customers, allowing them to explore, select,
          and purchase clothing products online. It acts as a virtual store
          where businesses showcase their latest collections, provide detailed
          product information, and enable secure transactions. With a
          user-friendly interface and responsive design, the website ensures
          smooth navigation and accessibility across devices.
        </p>
        <p>
          E-commerce website is an online platform that allows businesses to
          sell products and services directly to customers. It functions as a
          digital marketplace where users can browse items, make purchases, and
          complete transactions securely, all without the need for a physical
          store.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
