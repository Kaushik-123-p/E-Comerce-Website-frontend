import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);

  return (
    <div className="px-32">
      <div className="grid grid-cols-6 items-center gap-[75px] px-0 py-5 text-gray-700 text-lg font-semibold">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="h-[3px] bg-gray-300 border-0 mt-4" />

      {all_product.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div key={product.id} className="py-4">
              <div className="grid grid-cols-6 items-center gap-[75px] text-gray-700 text-[17px] font-medium">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[80px]"
                />
                <p>{product.name}</p>
                <p>${product.new_price}</p>
                <button className="w-16 h-[50px] border-2 border-gray-200 bg-white">
                  {cartItems[product.id]}
                </button>
                <p>${(product.new_price * cartItems[product.id]).toFixed(2)}</p>
                <img
                  src={remove_icon}
                  alt="remove"
                  onClick={() => removeFromCart(product.id)}
                  className="w-[15px] mx-[40px] cursor-pointer text-red-500 hover:text-red-700"
                />
              </div>
              <hr className="h-[3px] bg-gray-300 border-0 mt-4" />
            </div>
          );
        }
        return null;
      })}

      <div className="cartitmes-down flex py-[100px] gap-40">
        <div className="cartitems-total flex flex-col w-full ">
          <h1 className="text-2xl font-bold py-5">Cart Totals</h1>
          <div>
            <div className="cartitems-total-item flex justify-between py-4 ">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className="h-[3px] bg-gray-300 border-0 mt-4" />
            <div className="cartitems-total-item flex justify-between py-4">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr className="h-[3px] bg-gray-300 border-0 mt-4" />
            <div className="cartitems-total-item flex justify-between py-4">
              <h3 className="font-bold">Total</h3>
              <h3 className="font-bold">${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button className=" w-[262px] h-[58px] outline-none border-none bg-red-500 text-white text-base font-semibold cursor-pointer  ">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cartitems-promocode flex flex-col text-base font-semibold gap-y-5 ">
          <p className="text-gray-500">
            If you have a promo code, Enter it here
          </p>
          <div className="cartitems-promobox w-[504px] h-[58px] mt-4 pl-5 bg-gray-300 border flex items-center justify-between">
            <input
              className="border-none outline-none bg-transparent text-base h-[50px]"
              type="text"
              placeholder="promo code"
            />
            <button className="w-[170px]  h-[58px] text-base bg-black text-white cursor-pointer">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
