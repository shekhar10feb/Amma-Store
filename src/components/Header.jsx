import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assests/logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const Header = () => {
  const [show, setShow] = useState("none");

  function funcVisible() {
    if (show === "none") {
      setShow("flex");
    } else {
      setShow("none");
    }
  }

  return (
    <div>
      <nav className="w-full flex justify-between items-center flex-row p-2">
        <div className="flex justify-center items-center flex-row z-10">
          <MenuIcon
            className="text-white text-base mx-1 cursor-pointer"
            onClick={funcVisible}
          />
          <NavLink to='/'>
            <div className="mx-1">
              <img src={Logo} className="w-20 cursor-pointer" alt="" />
            </div>
          </NavLink>
        </div>
        <div>
          <div className="flex justify-center items-center flex-row">
            <NavLink to="/signup">
              <p className="text-white cursor-pointer mx-2">Register</p>
            </NavLink>
            <div className="mx-1">
              <ShoppingCartIcon className="text-base text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>
      <div>
        <div
          className="w-[50%] h-full flex justify-start items-center flex-col absolute left-0 text-white bg-slate-800 p-2 z-10"
          style={{ display: show }}
        >
          <div className="w-full flex justify-center items-start flex-col bg-slate-800 mx-2 my-4">
            <h2 className="w-full text-base font-semibold bg-slate-800 rounded-md cursor-pointer hover:bg-gray-500">
              AmmaStore Home
            </h2>
          </div>
          <div className="w-full flex justify-center items-start flex-col bg-slate-800 mx-2 my-4">
            <h2 className="w-full text-base font-semibold bg-slate-800">
              Trending
            </h2>
            <p className="w-full bg-slate-800 px-2 rounded-md cursor-pointer hover:bg-gray-500">
              Best Sellers
            </p>
            <p className="w-full bg-slate-800 px-2 rounded-md cursor-pointer hover:bg-gray-500">
              New Releases
            </p>
            <p className="w-full bg-slate-800 px-2 rounded-md cursor-pointer hover:bg-gray-500">
              Movers & Shakers
            </p>
          </div>
          <div className="w-full flex justify-center items-start flex-col bg-slate-800 mx-2 my-4">
            <h2 className="text-base font-semibold bg-slate-800">
              Top Departments
            </h2>
            <p className="w-full bg-slate-800 px-2 rounded-md cursor-pointer hover:bg-gray-500">
              Home
            </p>
            <p className="w-full bg-slate-800 px-2 rounded-md cursor-pointer hover:bg-gray-500">
              Health & Household
            </p>
            <p className="w-full bg-slate-800 px-2 rounded-md cursor-pointer hover:bg-gray-500">
              Books
            </p>
            <p className="w-full bg-slate-800 px-2 rounded-md cursor-pointer hover:bg-gray-500">
              PC
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
