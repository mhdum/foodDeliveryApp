import React from 'react';
import './Cards.css';

const categories = [
  { title: 'Order Online', description: 'Stay home and order to your doorstep', image: 'online.jpg' },
  { title: 'Dining', description: "View the city's favourite dining venues", image: 'dining.jpg' }
];

const Cards = () => {
  return (
    <div className="cards">
      {categories.map((category, index) => (
        <div className="card" key={index}>
          <img src={category.image} alt={category.title} />
          <h3>{category.title}</h3>
          <p>{category.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;