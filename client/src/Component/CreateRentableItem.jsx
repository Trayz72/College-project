import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AdminNavbar from "../AdminDashboard/AdminNavbar";
import RenTab from "../AdminDashboard/RenTab";

const CreateRentableItem = () => {
  const [formData, setFormData] = useState({
    ItemName: "",
    Description: "",
    Rent_per_hour: 0,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3030/rentableItems", formData);
      navigate("/rentableItems");
    } catch (error) {
      console.error("Error adding rentable item:", error);
    }
  };

  return (
    <>
      <AdminNavbar />
      <RenTab />
      <div className="form-container">
        <h2>Add Rentable Item</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="itemName">Item Name</label>
          <input
            type="text"
            id="itemName"
            name="ItemName"
            value={formData.ItemName}
            onChange={handleChange}
            required
          />

          <label htmlFor="itemDescription">Description</label>
          <textarea
            id="itemDescription"
            name="Description"
            value={formData.Description}
            onChange={handleChange}
            required
          ></textarea>

          <label htmlFor="rentPerHour">Rent per Hour</label>
          <input
            type="number"
            id="rentPerHour"
            name="Rent_per_hour"
            value={formData.Rent_per_hour}
            onChange={handleChange}
            required
          />

          <button type="submit" className="submit-btn my-3">
            Add Rentable Item
          </button>
        </form>

        <Link to="/rentableItems" className="link my-3">
          Go back to Rentable Items
        </Link>
      </div>
    </>
  );
};

export default CreateRentableItem;
