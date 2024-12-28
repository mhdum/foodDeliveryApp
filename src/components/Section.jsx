import React from 'react';
import './Section.css';

const Section = () => {
  return (
    <div className="section">
      <div className="content">
        <h1>FoodFeast</h1>
        <p>Eat Good, Feel Good</p>
        <div className="search-bar">
          <input type="text" placeholder="Search for restaurant, cuisine or a dish" />
        </div>
      </div>
    </div>
  );
};

export default Section;