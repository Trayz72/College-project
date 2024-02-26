import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../AdminDashboard/AdminNavbar";

import SevTab from "../AdminDashboard/SevTab";

const AddService = () => {
  const navigate = useNavigate();

  // State to store form data
  const [formData, setFormData] = useState({
    Service_Category_Name: "",
    Service_Category_Description: "",
    Cost_per_hour: 0,
    Product_dimension: 0,
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3030/services",
        formData
      );
      console.log(response.data);

      // Redirect to /services after successful addition
      navigate("/services");
    } catch (error) {
      console.error("Error adding service:", error);
    }
  };

  return (
    <>
      <AdminNavbar />

      <SevTab />
      <div className="form-container">
        <h2>Add Service</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="serviceName">Service Category Name</label>
          <input
            type="text"
            id="serviceName"
            name="Service_Category_Name"
            value={formData.Service_Category_Name}
            onChange={handleChange}
            required
          />

          <label htmlFor="serviceDescription">
            Service Category Description
          </label>
          <textarea
            id="serviceDescription"
            name="Service_Category_Description"
            value={formData.Service_Category_Description}
            onChange={handleChange}
            required
          ></textarea>

          <label htmlFor="costPerHour">Cost per Hour</label>
          <input
            type="number"
            id="costPerHour"
            name="Cost_per_hour"
            value={formData.Cost_per_hour}
            onChange={handleChange}
            required
          />

          <label htmlFor="productDimension">Product Dimension</label>
          <input
            type="number"
            id="productDimension"
            name="Product_dimension"
            value={formData.Product_dimension}
            onChange={handleChange}
            required
          />

          <button type="submit" className="submit-btn">
            Add Service
          </button>
        </form>
      </div>
    </>
  );
};

export default AddService;
