import React from "react";
import bgImage from "../assets/bgImage.jpg";

const Section = () => {
  return (
    <div
      className="w-full h-[60vh] bg-cover bg-center text-white p-24"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex flex-col items-center">
        <h1 className="text-4xl mb-2">FoodFeast</h1>
        <p className="text-xl mb-5">Eat Good, Feel Good</p>
        <div className="flex justify-center w-full">
          <input
            type="text"
            placeholder="Search for restaurant, cuisine or a dish"
            className="p-2 w-4/5 max-w-[400px] border-2 border-black rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Section;
