import { NavLink } from "react-router-dom";
import React from "react";
import photos from "../randomProducts";

export const RandomProducts = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col my-8">
      <h2 className="w-[90%] text-white text-left text-lg font-bold mx-2">Random Products</h2>
      {photos.map((photo) => {
        const { id, image, link } = photo;
        return (
          <NavLink
            to={link}
            className="w-full flex justify-center items-center flex-col" key={id}
          >
            <img src={image} className="w-[90%] my-2" alt="" />
          </NavLink>
        );
      })}
    </div>
  );
};
