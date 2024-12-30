
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "./Navbar";

const RestaurantDashboard = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [sales, setSales] = useState(0); 

 
  useEffect(() => {
   
    const fetchData = async () => {
     
      const ordersData = [
        { id: 1, name: "Order 1", total: 25, status: "Pending" },
        { id: 2, name: "Order 2", total: 40, status: "Completed" },
        { id: 3, name: "Order 3", total: 15, status: "Pending" },
      ];
      const menuData = [
        { id: 1, name: "Burger", price: 5 },
        { id: 2, name: "Pizza", price: 10 },
        { id: 3, name: "Pasta", price: 7 },
      ];
      const totalSales = 25 + 40 + 15; 

      setOrders(ordersData);
      setMenuItems(menuData);
      setSales(totalSales);
    };

    fetchData();
  }, []);

  const handleLogout = async () => {
    try {
      console.log("Restaurant owner signed out");
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
        <div className="w-64 bg-blue-600 text-white p-6">
          <h2 className="text-2xl font-semibold text-center text-white">
            Dashboard
          </h2>
          <ul className="mt-8">
            <li className="mb-4">
              <a
                href="/restaurant-dashboard"
                className="text-white hover:text-blue-500"
              >
                Orders
              </a>
            </li>
            <li className="mb-4">
              <a
                href="/restaurant-dashboard/menu"
                className="text-white hover:text-blue-500"
              >
                Menu
              </a>
            </li>
            <li className="mb-4">
              <a
                href="/restaurant-dashboard/sales"
                className="text-white hover:text-blue-500"
              >
                Sales
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
          <h2 className="text-3xl font-bold mb-6">
            Restaurant Owner Dashboard
          </h2>

          {/* Sales Overview */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h3 className="text-xl font-semibold mb-4">Sales Overview</h3>
            <p className="text-lg">Total Sales: ${sales}</p>
          </div>

          {/* Orders */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h3 className="text-xl font-semibold mb-4">Incoming Orders</h3>
            <table className="min-w-full text-sm text-left text-gray-500">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4">Order ID</th>
                  <th className="py-2 px-4">Order Name</th>
                  <th className="py-2 px-4">Total</th>
                  <th className="py-2 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b">
                    <td className="py-2 px-4">{order.id}</td>
                    <td className="py-2 px-4">{order.name}</td>
                    <td className="py-2 px-4">${order.total}</td>
                    <td className="py-2 px-4">{order.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Menu Management */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h3 className="text-xl font-semibold mb-4">Menu Management</h3>
            <table className="min-w-full text-sm text-left text-gray-500">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4">Item ID</th>
                  <th className="py-2 px-4">Item Name</th>
                  <th className="py-2 px-4">Price</th>
                </tr>
              </thead>
              <tbody>
                {menuItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-2 px-4">{item.id}</td>
                    <td className="py-2 px-4">{item.name}</td>
                    <td className="py-2 px-4">${item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
              Add New Menu Item
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantDashboard;
