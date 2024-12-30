import React from "react";
import OnlineImage from "../assets/online2.jpg";
import Dinein from "../assets/dining.jpg";

const categories = [
  {
    title: "Order Online",
    description: "Stay home and order to your doorstep",
    image: OnlineImage,
    value: "online",
  },
  {
    title: "Dining",
    description: "View the city's favourite dining venues",
    image: Dinein,
    value: "dinein",
  },
];

const Cards = () => {
  return (
    <div className="flex justify-center gap-5 my-10">
      {categories.map((category, index) => (
        <a
          key={index}
          href={`/${category.value}`}
          className="w-[35%] p-5 text-center shadow-lg rounded-lg "
        >
          <div>
            <img
              src={category.image}
              alt={category.title}
              className="w-full rounded-lg mb-4 h-[300px]"
            />
            <h3 className="text-xl mb-2">{category.title}</h3>
            <p className="text-base text-gray-600">{category.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Cards;
