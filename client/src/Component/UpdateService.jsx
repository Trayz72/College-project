import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import AdminNavbar from "../AdminDashboard/AdminNavbar";
import SevTab from "../AdminDashboard/SevTab";

const UpdateService = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    Service_Category_Name: "",
    Service_Category_Description: "",
    Cost_per_hour: "",
    Product_dimension: "",
  });

  // ID parameter from the URL
  const { id } = useParams();

  // Navigate hook for redirection
  const navigate = useNavigate();

  // Effect to fetch service details when the component mounts
  useEffect(() => {
    axios
      .get(`http://localhost:3030/services/${id}`)
      .then((res) => {
        setFormData(res.data[0]);
      })
      .catch((error) =>
        console.error("Error fetching service details:", error)
      );
  }, [id]);

  // Function to handle form input changes
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // Function to handle form submission for updating service
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:3030/services/${id}`, formData)
      .then((res) => {
        console.log(res.data);
        // Redirect to the list of services after successful update
        navigate("/services");
      })
      .catch((error) => console.error("Error updating service:", error));
  };

  return (
    <>
      <AdminNavbar />

      <SevTab />
      <div className="form-container">
        <h2>Update Service</h2>
        <form onSubmit={handleSubmit}>
          {/* Add your form input fields based on the service properties */}
          <label htmlFor="serviceCategoryName">Service Category Name</label>
          <input
            type="text"
            id="serviceCategoryName"
            name="Service_Category_Name"
            value={formData.Service_Category_Name}
            onChange={handleChange}
            required
          />

          <label htmlFor="serviceCategoryDescription">
            Service Category Description
          </label>
          <textarea
            id="serviceCategoryDescription"
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
            type="text"
            id="productDimension"
            name="Product_dimension"
            value={formData.Product_dimension}
            onChange={handleChange}
            required
          />

          <button type="submit" className="submit-btn">
            Update Service
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateService;
