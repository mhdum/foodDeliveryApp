import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import SignIn from "./Signin";
import SignUp from "./SignUp";
import AddRestaurant from "./restaurant/AddRestaurant";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/restaurant/AddRestaurant" element={<AddRestaurant />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
