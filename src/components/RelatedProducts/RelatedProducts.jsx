import React from "react";
import Item from "../Item/Item";
import data_product from "../assets/all_product";

const RelatedProducts = () => {
  return (
    <div
      className="relatedProducts flex flex-col items-center
    gap-2 pb-30"
    >
      <h1 className="text-gray-700 font-semibold text-4xl">Related Products</h1>
      <hr className="w-[200px] h-1 rounded-md bg-gray-700" />
      <div className="rel-prod-item pt-[50px] grid grid-cols-4 gap-7">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
