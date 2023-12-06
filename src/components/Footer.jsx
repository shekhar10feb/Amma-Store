import React from "react";
import { NavLink } from "react-router-dom";
export const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col text-white text-sm bg-black my-2">
      <div className="w-full flex justify-center items-center flex-col font-semibold text-white text-sm bg-black my-2">
        <NavLink to='/signin'>
          <p>Already a customer? Sign in</p>
        </NavLink>
      </div>
      <div className="w-full flex justify-center items-center flex-row text-white bg-black text-xs">
        <p className="mx-2">Conditions of Use</p>
        <p className="mx-2">Privacy Notice</p>
      </div>
      <div className="text-xs">
        <p>&#169; 2022-Onwards</p>
      </div>
    </div>
  );
};
