import React, { useState } from "react";
import Navbar from "../components/Navbar";

const RestaurantSubmissionForm = () => {
  const [formData, setFormData] = useState({
    panCard: "",
    menuDetails: "",
    dishImage: null,
    gstNumber: "",
    fssaiLicense: "",
    bankAccount: "",
  });

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      dishImage: e.target.files[0],
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <>
    <Navbar/>
    <div className="max-w-lg mt-20 mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Restaurant Submission Form
      </h2>
      <form onSubmit={handleSubmit}>
        {/* PAN Card */}
        <div className="mb-4">
          <label
            htmlFor="panCard"
            className="block text-sm font-medium text-gray-700"
          >
            PAN Card Number
          </label>
          <input
            type="text"
            id="panCard"
            name="panCard"
            value={formData.panCard}
            onChange={handleInputChange}
            required
            className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Menu Details */}
        <div className="mb-4">
          <label
            htmlFor="menuDetails"
            className="block text-sm font-medium text-gray-700"
          >
            Menu Details
          </label>
          <textarea
            id="menuDetails"
            name="menuDetails"
            value={formData.menuDetails}
            onChange={handleInputChange}
            required
            rows="4"
            className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Dish Image */}
        <div className="mb-4">
          <label
            htmlFor="dishImage"
            className="block text-sm font-medium text-gray-700"
          >
            Dish Image
          </label>
          <input
            type="file"
            id="dishImage"
            name="dishImage"
            onChange={handleFileChange}
            className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* GST Number */}
        <div className="mb-4">
          <label
            htmlFor="gstNumber"
            className="block text-sm font-medium text-gray-700"
          >
            GST Number (If applicable)
          </label>
          <input
            type="text"
            id="gstNumber"
            name="gstNumber"
            value={formData.gstNumber}
            onChange={handleInputChange}
            className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* FSSAI License */}
        <div className="mb-4">
          <label
            htmlFor="fssaiLicense"
            className="block text-sm font-medium text-gray-700"
          >
            FSSAI License
          </label>
          <input
            type="text"
            id="fssaiLicense"
            name="fssaiLicense"
            value={formData.fssaiLicense}
            onChange={handleInputChange}
            required
            className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Bank Account Details */}
        <div className="mb-4">
          <label
            htmlFor="bankAccount"
            className="block text-sm font-medium text-gray-700"
          >
            Bank Account Details
          </label>
          <textarea
            id="bankAccount"
            name="bankAccount"
            value={formData.bankAccount}
            onChange={handleInputChange}
            required
            rows="3"
            className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Submit Form
        </button>
      </form>
    </div>
    </>
  );
};

export default RestaurantSubmissionForm;
