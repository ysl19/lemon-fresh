import React from "react";
import logo from "../assets/images/lemon.png";

const Navbar = () => {
  return (
    <nav className="px-2 flex items-center justify-between py-4 w-full border rounded-b-2xl shadow-lg bg-gray-200">
      <div className="flex items-center">
        <img src={logo} alt="logo-img" className="w-1/12" />
        <span className="text-2xl font-bold">Lemon Fresh</span>
      </div>
      <ul className="flex gap-x-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About Us</a>
        </li>
        <li>
          <a href="/">List</a>
        </li>
      </ul>
      <button className="border rounded-xl border-black bg-green-400">
        Click me
      </button>
    </nav>
  );
};

export default Navbar;
