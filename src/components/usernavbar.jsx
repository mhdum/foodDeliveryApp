// src/components/Navbar.jsx
import { useState } from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#5800f9] p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-semibold">
          <a href="/">FoodFeast </a>
        </div>

        <div className={` lg:flex space-x-4 text-white`}>

        </div>
        <div>
          <a
            href="/cart"
            className="bg-[#4b00d3] text-white px-3 py-2 rounded-md"
          >
            Cart 
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
