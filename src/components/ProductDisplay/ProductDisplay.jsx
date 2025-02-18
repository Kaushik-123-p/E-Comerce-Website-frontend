import React, { useContext } from "react";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;

  const { addToCart } = useContext(ShopContext);

  return (
    <div className="productdisplay flex w-[85%]  justify-between p-2 gap-2  ">
      <div className="productdisplay-left flex gap-2 ">
        <div className="productdispaly-image-list flex flex-col items-center justify-center gap-2 ">
          <img
            className="h-[118px] w-[180px] rounded"
            src={product.image}
            alt=""
          />
          <img
            className="h-[118px] w-[180px] rounded"
            src={product.image}
            alt=""
          />
          <img
            className="h-[118px] w-[180px] rounded"
            src={product.image}
            alt=""
          />
          <img
            className="h-[118px] w-[180px] rounded"
            src={product.image}
            alt=""
          />
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img w-[750px] h-[500px] rounded"
            src={product.image}
            alt=""
          />
        </div>
      </div>
      <div className="productdisplay-right flex flex-col py-2 px-15 gap-3.5  ">
        <h1 className="text-gray-700 text-4xl font-bold ">
          {product.name}
        </h1>
        <div className="productdisplay-right-stars flex items-center mt-[13px] gap-5 text-gray-900 text-base">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices flex  gap-7 text-xl font-bold text-gray-500 line-through">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new text-red-500">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a round neckline and shot sleeves,worn as an undershirt or outer
          garment.
        </div>
        <div className="productdispla-right-size ">
          <h1 className="mt-[55px] text-gray-600 text-xl font-bold">
            Select Size
          </h1>
          <div className="productdisplay-right-size  flex my-[30px] gap-5">
            <div className="px-6 py-[18px] bg-gray-100 border border-gray-200 rounded cursor-pointer">
              S
            </div>
            <div className="px-6 py-[18px] bg-gray-100 border border-gray-200 rounded cursor-pointer">
              M
            </div>
            <div className="px-6 py-[18px] bg-gray-100 border border-gray-200 rounded cursor-pointer">
              L
            </div>
            <div className="px-6 py-[18px] bg-gray-100 border border-gray-200 rounded cursor-pointer">
              XL
            </div>
            <div className="px-6 py-[18px] bg-gray-100 border border-gray-200 rounded cursor-pointer">
              XXL
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
          className="w-[200px] px-6 py-3 text-[16px] font-bold text-white bg-red-500 rounded outline-none cursor-pointer"
        >
          ADD TO CART
        </button>
        <p className="productdisplay-right-category mt-[10px] gap-2">
          <span className="font-bold">Category:</span>
          Women, T-shirt, Crop Top
        </p>
        <p className="productdisplay-right-category mt-[10px]">
          <span className="font-bold">Tags:</span>
          Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
