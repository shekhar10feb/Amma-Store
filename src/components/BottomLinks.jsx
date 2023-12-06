import React from "react";
import { NavLink } from "react-router-dom";

export const BottomLinks = () => {
  return (
    <div className="w-full flex justify-center items-center flex-row text-white text-sm bg-gray-700">
      <div className="w-full flex justify-center items-start flex-col bg-gray-700">
        <p className=" bg-gray-700 m-2 cursor-pointer">
          <NavLink className=" text-sm bg-gray-700 hover:bg-white hover:text-black p-1 rounded-sm">
            Your Orders
          </NavLink>
        </p>
        <p className=" bg-gray-700 m-2 cursor-pointer">
          <NavLink className=" text-sm bg-gray-700 hover:bg-white hover:text-black p-1 rounded-sm">
            Your Lists
          </NavLink>
        </p>
        <p className=" bg-gray-700 m-2 cursor-pointer">
          <NavLink className=" text-sm bg-gray-700 hover:bg-white hover:text-black p-1 rounded-sm">
            Browsing History
          </NavLink>
        </p>
      </div>
      <div className="w-full flex justify-center items-start flex-col bg-gray-700">
        <p className=" bg-gray-700 m-2 cursor-pointer">
          <NavLink className=" text-sm bg-gray-700 hover:bg-white hover:text-black p-1 rounded-sm">
            AmmaStoreFresh
          </NavLink>
        </p>
        <p className=" bg-gray-700 m-2 cursor-pointer">
          <NavLink className=" text-sm bg-gray-700 hover:bg-white hover:text-black p-1 rounded-sm">
            Your Account
          </NavLink>
        </p>
        <p className=" bg-gray-700 m-2 cursor-pointer">
          <NavLink className=" text-sm bg-gray-700 hover:bg-white hover:text-black p-1 rounded-sm">
            Customer Service
          </NavLink>
        </p>
      </div>
    </div>
  );
};
