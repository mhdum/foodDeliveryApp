import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState([]);
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const restaurantData = [
        { id: 1, name: "Restaurant 1", owner: "Food Plaza" },
        { id: 2, name: "Restaurant 2", owner: "SPice" },
      ];
      const userData = [
        { id: 1, name: "Customer 1", email: "john@example.com" },
        { id: 2, name: "Customer 2", email: "jack@example.com" },
      ];
      const orderData = [
        { id: 1, restaurant: "Restaurant 1", total: 30, status: "Pending" },
        { id: 2, restaurant: "Restaurant 2", total: 40, status: "Completed" },
      ];

      setRestaurants(restaurantData);
      setUsers(userData);
      setOrders(orderData);
    };

    fetchData();
  }, []);

  const handleLogout = async () => {
    try {
      console.log("Admin signed out");
      navigate("/signin");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-blue-600 text-white p-6 ">
          <h2 className="text-2xl font-semibold text-center text-white">
            Admin Dashboard
          </h2>
          <ul className="mt-8">
            <li className="mb-4">
              <a
                href="/admin-dashboard/restaurants"
                className="text-white hover:text-blue-500"
              >
                Restaurants
              </a>
            </li>
            <li className="mb-4">
              <a
                href="/admin-dashboard/users"
                className="text-white hover:text-blue-500"
              >
                Users
              </a>
            </li>
            <li className="mb-4">
              <a
                href="/admin-dashboard/orders"
                className="text-white hover:text-blue-500"
              >
                Orders
              </a>
            </li>
            <li className="mt-8">
              <button
                onClick={handleLogout}
                className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
              >
                Log Out
              </button>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>

          {/* Overview Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {/* Restaurants Overview */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">
                Restaurants Overview
              </h3>
              <ul>
                {restaurants.map((restaurant) => (
                  <li key={restaurant.id} className="mb-3">
                    <p className="font-semibold">{restaurant.name}</p>
                    <p className="text-sm">Owner: {restaurant.owner}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Users Overview */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Users Overview</h3>
              <ul>
                {users.map((user) => (
                  <li key={user.id} className="mb-3">
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-sm">Email: {user.email}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Orders Overview */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Orders Overview</h3>
              <ul>
                {orders.map((order) => (
                  <li key={order.id} className="mb-3">
                    <p className="font-semibold">{order.restaurant}</p>
                    <p className="text-sm">Total: ${order.total}</p>
                    <p className="text-sm">Status: {order.status}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Restaurant Management */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h3 className="text-xl font-semibold mb-4">Manage Restaurants</h3>
            <table className="min-w-full text-sm text-left text-gray-500">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4">Restaurant ID</th>
                  <th className="py-2 px-4">Restaurant Name</th>
                  <th className="py-2 px-4">Owner</th>
                  <th className="py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {restaurants.map((restaurant) => (
                  <tr key={restaurant.id} className="border-b">
                    <td className="py-2 px-4">{restaurant.id}</td>
                    <td className="py-2 px-4">{restaurant.name}</td>
                    <td className="py-2 px-4">{restaurant.owner}</td>
                    <td className="py-2 px-4">
                      <button className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600">
                        Edit
                      </button>
                      <button className="ml-2 bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* User Management */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h3 className="text-xl font-semibold mb-4">Manage Users</h3>
            <table className="min-w-full text-sm text-left text-gray-500">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4">User ID</th>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Email</th>
                  <th className="py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b">
                    <td className="py-2 px-4">{user.id}</td>
                    <td className="py-2 px-4">{user.name}</td>
                    <td className="py-2 px-4">{user.email}</td>
                    <td className="py-2 px-4">
                      <button className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600">
                        Edit
                      </button>
                      <button className="ml-2 bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
