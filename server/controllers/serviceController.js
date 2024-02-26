// serviceController.js
const db = require("../db");

// List all services
const getServices = (req, res) => {
  db.query("SELECT * FROM service_category_table", (err, results) => {
    if (err) {
      console.error("Error fetching services:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(200).json(results);
    }
  });
};

// Add a new service category
const addService = (req, res) => {
  const {
    Service_Category_Name,
    Service_Category_Description,
    Cost_per_hour,
    Product_dimension,
  } = req.body;

  const query = `
    INSERT INTO service_category_table 
    (Service_Category_Name, Service_Category_Description, Cost_per_hour, Product_dimension)
    VALUES (?, ?, ?, ?)
  `;

  db.query(
    query,
    [
      Service_Category_Name,
      Service_Category_Description,
      Cost_per_hour,
      Product_dimension,
    ],
    (err, result) => {
      if (err) {
        console.error("Error adding service:", err);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        res.status(201).json({
          message: "Service added successfully",
          Service_Category_Id: result.insertId,
        });
      }
    }
  );
};

// Update a service category
const updateService = (req, res) => {
  const Service_Category_Id = req.params.id;
  const {
    Service_Category_Name,
    Service_Category_Description,
    Cost_per_hour,
    Product_dimension,
  } = req.body;

  const query = `
    UPDATE service_category_table
    SET Service_Category_Name=?, Service_Category_Description=?, Cost_per_hour=?, Product_dimension=?
    WHERE Service_Category_Id=?
  `;

  db.query(
    query,
    [
      Service_Category_Name,
      Service_Category_Description,
      Cost_per_hour,
      Product_dimension,
      Service_Category_Id,
    ],
    (err, result) => {
      if (err) {
        console.error("Error updating service:", err);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        res.status(200).json({ message: "Service updated successfully" });
      }
    }
  );
};

// Delete a service category
const deleteService = (req, res) => {
  const Service_Category_Id = req.params.id;

  const query =
    "DELETE FROM service_category_table WHERE Service_Category_Id=?";

  db.query(query, [Service_Category_Id], (err, result) => {
    if (err) {
      console.error("Error deleting service:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(200).json({ message: "Service deleted successfully" });
    }
  });
};

module.exports = {
  getServices,
  addService,
  updateService,
  deleteService,
};
