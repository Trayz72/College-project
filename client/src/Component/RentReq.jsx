import { useState, useEffect } from "react";
import axios from "axios";
import AdminNavbar from "../AdminDashboard/AdminNavbar";
import RenTab from "../AdminDashboard/RenTab";

export const RentReq = () => {
  const [rentRequests, setRentRequests] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/getAllRentRequest")
      .then((res) => setRentRequests(res.data))
      .catch((error) => console.log(error));
  }, []);

  const handleUpdateStatus = async (requestId, newStatus) => {
    try {
      await axios.put(
        `http://localhost:3030/updateRentReqStatus/${requestId}`,
        {
          Status: newStatus,
        }
      );

      setRentRequests((prevRequests) =>
        prevRequests.map((request) =>
          request.RequestId === requestId
            ? { ...request, Status: newStatus }
            : request
        )
      );
    } catch (error) {
      console.error("Error updating rent request status:", error);
    }
  };

  const handleDeleteRequest = async (requestId) => {
    try {
      await axios.delete(
        `http://localhost:3030/deleteRentRequest/${requestId}`
      );

      setRentRequests((prevRequests) =>
        prevRequests.filter((request) => request.RequestId !== requestId)
      );
    } catch (error) {
      console.error("Error deleting rent request:", error);
    }
  };

  return (
    <>
      <AdminNavbar />
      <RenTab />
      <div className="table-container">
        {rentRequests.length !== 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>Request ID</th>
                <th>Required Hours</th>
                <th>Date and Time</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Contact N0.</th>
                <th>Item Name</th>
                <th>Total Cost</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {rentRequests.map((request, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "even-row" : "odd-row"}
                >
                  <td>{request.RequestId}</td>
                  <td>{request.RequiredHours}</td>
                  <td>{request.DateTime}</td>
                  <td>{request.Username}</td>
                  <td>{request.Email}</td>
                  <td>{request.Contact_Number}</td>
                  <td>{request.ItemName}</td>
                  <td>{request.TotalCost}</td>
                  <td>{request.Status}</td>
                  <td className="action-buttons">
                    <button
                      className="link my-2 mx-2"
                      onClick={() =>
                        handleUpdateStatus(request.RequestId, "Approved")
                      }
                    >
                      Approve
                    </button>
                    <button
                      className="link my-2 mx-2"
                      onClick={() =>
                        handleUpdateStatus(request.RequestId, "Rejected")
                      }
                    >
                      Reject
                    </button>
                    <button
                      className="link my-2 mx-2"
                      onClick={() => handleDeleteRequest(request.RequestId)}
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
