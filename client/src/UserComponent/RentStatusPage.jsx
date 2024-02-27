import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Rent.css";

export default function RentStatusPage({ userId }) {
  const [rentRequests, setRentRequests] = useState([]);

  useEffect(() => {
    console.log("Received userId:", userId);

    axios
      .get("http://localhost:3030/getAllRentRequestsFromUser", {
        params: {
          userId: userId,
        },
      })
      .then((response) => {
        console.log("Response from backend:", response.data);
        setRentRequests(response.data);
      })
      .catch((error) => {
        console.error("Error fetching rent requests:", error);
      });
  }, [userId]);

  return (
    <div className="rent-status-page">
      <h2>Your Rent Requests</h2>
      {rentRequests.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Request ID</th>
              <th>Required Hours</th>
              <th>Date and Time</th>
              <th>Item Name</th>
              <th>Total Cost</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {rentRequests.map((request) => (
              <tr key={request.RequestId}>
                <td>{request.RequestId}</td>
                <td>{request.RequiredHours}</td>
                <td>{request.DateTime}</td>
                <td>{request.ItemName}</td>
                <td>{request.TotalCost}</td>
                <td>{request.Status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No rent requests found.</p>
      )}
    </div>
  );
}
