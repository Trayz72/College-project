const db = require("../db");

// Get all admins
exports.getAllAdmins = (req, res) => {
  const sql = "SELECT * FROM Admin_Table";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    } else {
      return res.json(data);
    }
  });
};

// Create a new admin
exports.createAdmin = (req, res) => {
  const sql = "INSERT INTO Admin_Table (User_Name, Password) VALUES (?, ?)";
  const values = [req.body.User_Name, req.body.Password];

  db.query(sql, values, (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    } else {
      return res.json(data);
    }
  });
};

// Update an existing admin
exports.updateAdmin = (req, res) => {
  const sql =
    "UPDATE Admin_Table SET User_Name = ?, Password = ? WHERE Admin_Id = ?";
  const values = [req.body.User_Name, req.body.Password, req.params.id];

  db.query(sql, values, (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    } else {
      return res.json(data);
    }
  });
};

// Delete an admin
exports.deleteAdmin = (req, res) => {
  const sql = "DELETE FROM Admin_Table WHERE Admin_Id = ?";
  const id = req.params.id;

  db.query(sql, [id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    } else {
      return res.json(data);
    }
  });
};

// Get a single admin record by ID
exports.getRecordById = (req, res) => {
  const sql = "SELECT * FROM Admin_Table WHERE Admin_Id = ?";
  const id = req.params.id;

  db.query(sql, [id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    } else {
      return res.json(data);
    }
  });
};
