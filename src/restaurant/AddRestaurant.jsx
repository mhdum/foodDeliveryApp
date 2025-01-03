import React, { useState } from "react";
import Navbar from "../components/Navbar";
import {
  db,
  ref,
  set,
  storage,
  storageRef,
  uploadBytesResumable,
  getDownloadURL,
} from "../backend/fireBase";

const RestaurantSubmissionForm = () => {
  const [formData, setFormData] = useState({
    panCard: "",
    restaurantName: "",
    dishImage: null,
    gstNumber: "",
    fssaiLicense: "",
    bankAccount: "",
  });
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    try {
      let imageUrl = "";
      if (formData.dishImage) {
        const storageRef = ref(
          storage,
          "restaurantImages/" + formData.dishImage.name
        );
        const uploadTask = uploadBytesResumable(storageRef, formData.dishImage);

        await uploadTask
          .then((snapshot) => {
            return getDownloadURL(snapshot.ref);
          })
          .then((url) => {
            imageUrl = url;
          })
          .catch((uploadError) => {
            throw new Error("Error uploading image: " + uploadError.message);
          });
      }

      const restaurantData = {
        panCard: formData.panCard,
        restaurantName: formData.restaurantName,
        gstNumber: formData.gstNumber,
        fssaiLicense: formData.fssaiLicense,
        bankAccount: formData.bankAccount,
        dishImage: imageUrl,
      };

      const restaurantRef = ref(db, "restaurants/" + formData.restaurantName);
      await set(restaurantRef, restaurantData);
      console.log(restaurantData);
      console.log("Restaurant data saved successfully!");

      setUploading(false);
      alert("Form submitted successfully!");
      setFormData({
        panCard: "",
        restaurantName: "",
        dishImage: null,
        gstNumber: "",
        fssaiLicense: "",
        bankAccount: "",
      });
    } catch (err) {
      setUploading(false);
      setError(err.message || "An error occurred during submission.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-lg mt-20 mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Restaurant Submission Form
        </h2>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

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

          {/* Restaurant Name */}
          <div className="mb-4">
            <label
              htmlFor="restaurantName"
              className="block text-sm font-medium text-gray-700"
            >
              Restaurant Name
            </label>
            <input
              type="text"
              id="restaurantName"
              name="restaurantName"
              value={formData.restaurantName}
              onChange={handleInputChange}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Restaurant Logo (Dish Image) */}
          <div className="mb-4">
            <label
              htmlFor="restaurantLogo"
              className="block text-sm font-medium text-gray-700"
            >
              Restaurant Logo (Image)
            </label>
            <input
              type="file"
              id="restaurantLogo"
              name="restaurantLogo"
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
            disabled={uploading}
          >
            {uploading ? "Submitting..." : "Submit Form"}
          </button>
        </form>
      </div>
    </>
  );
};

export default RestaurantSubmissionForm;
