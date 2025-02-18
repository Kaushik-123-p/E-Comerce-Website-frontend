import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="rounded-md">
      <div className="item w-[320px] my-4 hover:scale-105 transition duration-600 ">
        <Link to={`/product/${props.id}`}>
          {" "}
          <img
            onClick={window.scrollTo(0, 0)}
            src={props.image}
            alt=""
            className="rounded-md"
          />
        </Link>
        <p className="m-1.5">{props.name}</p>
        <div className="item-prices flex gap-5">
          <div className="item-price-new text-gray-700 text-base font-semibold">
            ${props.new_price}
          </div>
          <div className="item-price-old text-gray-500 text-base font-medium line-through">
            ${props.old_price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
