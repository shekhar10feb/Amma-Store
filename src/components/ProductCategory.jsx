import { NavLink } from "react-router-dom";
import React, { useState } from "react";

const arr = [
  {
    id: 0,
    title: "Home",
    link: "/",
  },
  {
    id: 1,
    title: "Electronics",
    link: "/electronics",
  },
  {
    id: 2,
    title: "Clothes",
    link: "/clothes",
  },
  {
    id: 3,
    title: "Groceries",
    link: "/groceries",
  },
];

export const ProductCategory = () => {
  const [active, setActive] = useState(0);
  // const [active, setActive] = useState(false);

  const takeId = (item) => {
    setActive(item.id);
    // console.log(item.id);
    // setActive(!active);
  };

  return (
    <div className="w-full flex justify-center items-center border-b-2 border-gray-500 overflow-x-auto">
      <div className="w-full flex justify-center items-center">
        {arr.map((item) => (
          <li
            className="w-full flex justify-center items-center"
            key={item.id}

            // className={activescreen === item.id ? 'styleActiveScreen' : 'styleInactiveScreen'}
          >
            <NavLink
              to={item.link}
              className="text-white"
              // className="w-full flex justify-center items-center text-white"
              key={item.id}
              // style={{
              //   backgroundColor: item.id === activescreen ? "white" : " ",
              // }}
              // className={active === item.id ? "styleActiveScreen" : "styleInactiveScreen"}
              onClick={() => takeId(item)}
            >
              {item.title}
            </NavLink>
          </li>
          //   <li
          //   className="w-full flex justify-center items-center"
          //   key={item.id}
          //   // className={activescreen === item.id ? 'styleActiveScreen' : 'styleInactiveScreen'}
          // >
          //   <NavLink
          //     to={item.link}
          //     className={activescreen === item.id ? "styleActiveScreen" : "styleInactiveScreen"}
          //     id={item.id}
          //     onClick={() => takeId(item)}
          //   >
          //     {item.title}
          //   </NavLink>
          // </li>
        ))}
      </div>
    </div>
  );
};
