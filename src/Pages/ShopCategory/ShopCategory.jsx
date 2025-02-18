import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import dropdown_icon from "../../components/assets/dropdown_icon.png";
import Item from "../../components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <div className="flex items-center justify-center">
        <img
          className="shopcategory-banner mx-auto w-[82%]  my-[30px] rounded-lg "
          src={props.banner}
          alt="Shop Banner"
        />
      </div>

      <div className="flex items-center justify-center">
        <div className="shopcategory-indexSort flex justify-between items-center py-10 w-[80%]">
          <p className="text-lg font-semibold">
            <span>Showing 1-12</span> out of products
          </p>
          <div className="shopcategory-sort flex items-center gap-2 px-5 py-2 rounded-full border border-gray-500 cursor-pointer hover:bg-gray-200 transition">
            <span>Sort by</span>
            <img className="h-3 w-3" src={dropdown_icon} alt="Sort Icon" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="shopcategory-products  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[90%]  p-4  ">
          {all_product.map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center mt-28 mb-8 h-[280px]">
        <button className="shopecategory-loadmore w-[233px] h-[69px] flex justify-center items-center rounded-full bg-gray-300 text-gray-500 text-lg font-medium hover:bg-gray-400 transition">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default ShopCategory;
