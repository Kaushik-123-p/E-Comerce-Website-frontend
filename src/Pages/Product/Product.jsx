import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../../components/Breadcrum/Breadcrum";
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../../components/descriptionBox/descriptionBox";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";

const Product = () => {
  const shopContext = useContext(ShopContext);

  if (!shopContext) {
    return <h2>Loading...</h2>;
  }

  const { all_product } = shopContext;
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div className=" flex flex-col items-center justify-center">
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default Product;
