import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Rent({ userId }) {
  const [formData, setFormData] = useState({
    RequiredHours: 0,
    DateTime: "",
    ItemId: "",
  });

  const [rentableItems, setRentableItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/rentableItems")
      .then((res) => setRentableItems(res.data))
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const calculateTotalCost = () => {
    const selectedItem = rentableItems.find(
      (item) => item.ItemName === formData.ItemId
    );

    return selectedItem
      ? selectedItem.Rent_per_hour * formData.RequiredHours
      : 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const selectedItem = rentableItems.find(
        (item) => item.ItemName === formData.ItemId
      );

      if (!selectedItem) {
        throw new Error("Selected item not found");
      }

      const totalCost = selectedItem.Rent_per_hour * formData.RequiredHours;

      const dataToSubmit = {
        ...formData,
        UserId: userId,
        ItemId: selectedItem.ItemId,
        TotalCost: totalCost,
      };

      await axios.post("http://localhost:3030/createRentRequest", dataToSubmit);
    } catch (error) {
      console.error("Error adding rent request:", error);
    }
  };

  return (
    <>
      <h2>Rent Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="requiredHours">Required Hours</label>
        <input
          type="number"
          id="requiredHours"
          name="RequiredHours"
          value={formData.RequiredHours}
          onChange={handleChange}
          required
        />

        <label htmlFor="dateTime">Date and Time</label>
        <input
          type="datetime-local"
          id="dateTime"
          name="DateTime"
          value={formData.DateTime}
          onChange={handleChange}
          required
        />

        <label htmlFor="itemId">Select Item</label>
        <select
          id="itemId"
          name="ItemId"
          value={formData.ItemId}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select an item
          </option>
          {rentableItems.map((item) => (
            <option key={item.ItemId} value={item.ItemName}>
              {item.ItemName}
            </option>
          ))}
        </select>

        <p>Total Cost: ₹{calculateTotalCost().toFixed(2)}</p>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
