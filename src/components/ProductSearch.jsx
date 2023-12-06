import React from "react";
import SearchIcon from "@mui/icons-material/Search";

export const ProductSearch = () => {
  return (
    <div className="w-full flex justify-center items-center py-2 border-b-2 border-gray-500">
      <form
        action=""
        className="w-[80%] bg-gray-600 flex justify-between items-center rounded-lg border-none"
      >
        <input
          type="text"
          className="w-[84%] bg-gray-600 p-2 outline-none rounded-l-lg border-none"
          placeholder="Search Products"
        />
        <button
          type="submit"
          className="w-[15%] flex justify-center items-center bg-orange-500 rounded-r-lg focus:none p-2 border-none"
        >
          <SearchIcon className="bg-orange-500" />
        </button>
      </form>
    </div>
  );
};
