import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Dashboard = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
  };

  const orders = [
    {
      id: 1,
      restaurant: "Pizza Palace",
      status: "Delivered",
      date: "2024-12-01",
    },
    { id: 2, restaurant: "Burger King", status: "Pending", date: "2024-12-05" },
  ];

  const restaurants = [
    { id: 1, name: "Pizza Palace", rating: 4.5, cuisine: "Italian" },
    { id: 2, name: "Burger King", rating: 4.0, cuisine: "American" },
    { id: 3, name: "Sushi World", rating: 4.8, cuisine: "Japanese" },
  ];

  return (
    <>
      <Navbar /> {/* Assuming you have a Navbar component */}
      <div className="flex bg-gray-100 min-h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-blue-600 text-white p-6">
          <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
          <ul>
            <li>
              <Link
                to="/"
                className="block py-2 px-4 hover:bg-blue-500 rounded"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/orders"
                className="block py-2 px-4 hover:bg-blue-500 rounded"
              >
                Orders
              </Link>
            </li>
            <li>
              <Link
                to="/restaurants"
                className="block py-2 px-4 hover:bg-blue-500 rounded"
              >
                Restaurants
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="block py-2 px-4 hover:bg-blue-500 rounded"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="block py-2 px-4 hover:bg-blue-500 rounded"
              >
                Cart
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="grid grid-cols-3 gap-6">
            {/* Profile Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Profile</h3>
              <div>
                <p>
                  <strong>Name:</strong> {user.name}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
              </div>
            </div>

            {/* Orders Section */}
            <div className="bg-white p-6 rounded-lg shadow-md col-span-2">
              <h3 className="text-xl font-semibold mb-4">Your Orders</h3>
              <table className="w-full text-sm text-left">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Order ID</th>
                    <th className="px-4 py-2">Restaurant</th>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="border-b">
                      <td className="px-4 py-2">{order.id}</td>
                      <td className="px-4 py-2">{order.restaurant}</td>
                      <td className="px-4 py-2">{order.date}</td>
                      <td className="px-4 py-2">
                        <span
                          className={`px-3 py-1 rounded-full ${
                            order.status === "Delivered"
                              ? "bg-green-500 text-white"
                              : "bg-yellow-500 text-white"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Restaurants Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Nearby Restaurants</h3>
              <ul>
                {restaurants.map((restaurant) => (
                  <li key={restaurant.id} className="border-b py-4">
                    <h4 className="text-lg font-semibold">{restaurant.name}</h4>
                    <p>
                      {restaurant.cuisine} | Rating: {restaurant.rating}
                    </p>
                    <Link
                      to={`/restaurant/${restaurant.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      View Details
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
