import React from "react";
import { ProductCategory } from "./ProductCategory";
import { ProductSearch } from "./ProductSearch";
import Products from "../electronicsProducts";

export const Electronics = () => {
  return (
    <div>
      <ProductSearch />
      <ProductCategory />
      <div className="w-full flex justify-center items-center flex-col my-8">
        <h2 className="w-[90%] text-white text-left text-lg font-bold mx-2">
          We have amazing collection of Electronics Products
        </h2>
        {Products.map((product) => {
          const { id, image } = product;
          return <img src={image} className="w-[90%] my-2" alt="" key={id} />;
        })}
      </div>
    </div>
  );
};
