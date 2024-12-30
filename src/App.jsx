import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import SignIn from "./Signin";
import SignUp from "./SignUp";
import AddRestaurant from "./restaurant/AddRestaurant";
import SignUpRestaurant from "./restaurant/SignUpRestaurant";
import UserDashboard from "./components/UserDashboard";
import RestaurantDashboard from "./components/RestaurantOwnerDashboard";
import AdminDashboard from "./components/AdminDashBoard";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/restaurant/AddRestaurant" element={<AddRestaurant />} />
          <Route path="/restaurant/SignUpRestaurant" element={<SignUpRestaurant />} />
          <Route path="/components/UserDashboard" element={<UserDashboard />} />
          <Route
            path="/components/RestaurantOwnerDashBoard"
            element={<RestaurantDashboard />}
          />
          <Route
            path="/components/AdminDashBoard"
            element={<AdminDashboard />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
