import React from "react";
import data_product from "../../assets/data";
import Item from "../../Item/Item";

const Popular = () => {
  return (
    <div className="popular flex flex-col items-center gap-2.5 h-[90vh] p-20  ">
      <h1 className="text-gray-900 text-4xl font-semibold">POPULAR IN WOMEN</h1>
      <hr className="w-56 h-1 rounded-md bg-gray-800" />
      <div className="popular-item flex  gap-7  pt-4 ">
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

export default Popular;
