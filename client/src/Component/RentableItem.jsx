import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AdminNavbar from "../AdminDashboard/AdminNavbar";
import RenTab from "../AdminDashboard/RenTab";

const RentableItem = () => {
  const [rentableItems, setRentableItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/rentableItems")
      .then((res) => setRentableItems(res.data))
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = (itemId) => {
    axios
      .delete(`http://localhost:3030/rentableItems/${itemId}`)
      .then(() => {
        setRentableItems((prevItems) =>
          prevItems.filter((item) => item.ItemId !== itemId)
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <AdminNavbar />
      <RenTab />
      <div className="table-container">
        <Link to="/CreateRentableItem" className="link">
          Create
        </Link>
        {rentableItems.length !== 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Description</th>
                <th>Rent per Hour</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {rentableItems.map((item) => (
                <tr key={item.ItemId}>
                  <td>{item.ItemName}</td>
                  <td>{item.Description}</td>
                  <td>{item.Rent_per_hour}</td>
                  <td className="action-buttons">
                    <Link
                      to={`/UpdateRentableItem/${item.ItemId}`}
                      className="link"
                    >
                      Update
                    </Link>
                    <button
                      className="link mx-3"
                      onClick={() => handleDelete(item.ItemId)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h2>No records available</h2>
        )}
      </div>
    </>
  );
};

export default RentableItem;
