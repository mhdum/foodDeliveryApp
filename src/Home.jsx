import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Section from "./components/section";
import Cards from "./components/Cards";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Section/>
      <Cards/>
    </>
  );
};

export default LandingPage;
