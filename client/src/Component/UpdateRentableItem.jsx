import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link, Navigate } from "react-router-dom";
import AdminNavbar from "../AdminDashboard/AdminNavbar";
import RenTab from "../AdminDashboard/RenTab";

const UpdateRentableItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    ItemName: "",
    Description: "",
    Rent_per_hour: 0,
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/rentableItems/${id}`)
      .then((res) => setFormData(res.data))
      .catch((error) => console.log(error)); // Log the error, and you might want to set an error state here
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:3030/rentableItems/${id}`, formData);
      navigate("/rentableItems");
    } catch (error) {
      console.error("Error updating rentable item:", error);
      setError("Failed to update rentable item. Please try again."); // Set an error state for user feedback
    }
  };

  return (
    <>
      <AdminNavbar />
      <RenTab />
      <div className="form-container">
        <h2>Update Rentable Item</h2>
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

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="submit-btn my-3">
            Update Rentable Item
          </button>
        </form>

        <Link to="/rentableItems" className="link my-3">
          Go back to Rentable Items
        </Link>
      </div>
    </>
  );
};

export default UpdateRentableItem;
