import React from "react";
import new_collection from "../../assets/new_collections";
import Item from "../../Item/Item";

const NewCollections = () => {
  return (
    <div className="new_collections flex flex-col items-center gap-5 pb-24  pt-20 ">
      <h1 className="text-gray-900 text-4xl font-semibold"> NEW COLLECTIONS</h1>
      <hr className="w-56 h-1 rounded-md bg-gray-800" />
      <div className="collections grid grid-cols-4 mt-14 gap-7">
        {new_collection.map((item, i) => {
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

export default NewCollections;
