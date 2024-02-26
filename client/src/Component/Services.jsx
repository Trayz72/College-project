import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AdminNavbar from "../AdminDashboard/AdminNavbar";
import LocTab from "../AdminDashboard/LocTab";
import SevTab from "../AdminDashboard/SevTab";

const Service = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/services")
      .then((res) => setServices(res.data))
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = (Service_Category_Id) => {
    axios
      .delete(`http://localhost:3030/services/${Service_Category_Id}`)
      .then(() => {
        // Remove the deleted service from the state
        setServices((prevServices) =>
          prevServices.filter(
            (service) => service.Service_Category_Id !== Service_Category_Id
          )
        );
      })
      .catch((err) => console.log(err));
  };

  const addServiceRedirect = () => {
    navigate("/AddService");
  };

  if (services.length === 0) {
    return (
      <>
        <AdminNavbar />
        <SevTab />
        <div className="table-container">
          <button className="add-btn" onClick={addServiceRedirect}>
            Add Service
          </button>
          <h2>No records available</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <AdminNavbar />

      <SevTab />
      <div className="table-container">
        <button className="link" onClick={addServiceRedirect}>
          Add Service
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Service Category Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.Service_Category_Id}>
                <td>{service.Service_Category_Name}</td>
                <td className="action-buttons">
                  <Link
                    className="link"
                    to={`/UpdateService/${service.Service_Category_Id}`}
                  >
                    Update
                  </Link>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(service.Service_Category_Id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Service;
