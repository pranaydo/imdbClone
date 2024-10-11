import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex border space-x-8 items-center pl-3 py-4">
      <img
        className="w-[50px]"
        src="https://banner2.cleanpng.com/20180406/hhe/avgi86vjy.webp"
        alt="logo"
      />
      <Link className="text-blue-500  text-2xl font-bold" to="/">
        Movies
      </Link>
      <Link className="text-blue-500 text-2xl font-bold" to="/Watchlist">
        Watchlist
      </Link>
    </div>
  );
};

export default Navbar;
