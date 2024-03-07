const db = require("../db");

//insert the record in Area_Table
exports.createArea = (req, res) => {
  const sql = `INSERT INTO Area_Table (Pincode, Area_Name, City_Id) VALUES (?,?,?)`;

  const values = [req.body.Pincode, req.body.Area_Name, req.body.City_Id];

  db.query(sql, values, (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    } else {
      return res.json(data);
    }
  });
};

//display record of Area_Table
exports.getAllAreas = (req, res) => {
  const sql = `SELECT Area_Table.Pincode, Area_Table.Area_Name, City_Table.City_Name FROM Area_Table JOIN City_Table ON Area_Table.City_Id = City_Table.City_Id`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    } else {
      return res.json(data);
    }
  });
};

//delete record of Area_Table
exports.deleteArea = (req, res) => {
  const sql = "DELETE FROM Area_Table WHERE Pincode = ?";
  const id = req.params.id;

  db.query(sql, [id], (err, data) => {
    if (err) {
      res.json({ Error: "Error" });
    } else {
      res.json(data);
    }
  });
};

//get record of Area_Table with City_Id
exports.getAreas = (req, res) => {
  const sql = "SELECT * FROM Area_Table";
  db.query(sql, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.json(data);
  });
};

//get record of area from Area_Table from specific id
exports.getAreasRecord = (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM Area_Table WHERE Pincode = ?";
  db.query(sql, [id], (err, data) => {
    if (err) {
      res.json({ Error: "Error" });
    } else {
      res.json(data);
    }
  });
};

//update Area_Table record based on unique pincode
exports.updateArea = (req, res) => {
  const id = req.params.id;
  const sql = `UPDATE Area_Table SET Pincode = ?, Area_Name = ?, City_Id =? WHERE Pincode = ?`;

  const values = [req.body.Pincode, req.body.Area_Name, req.body.City_Id];

  db.query(sql, [...values, id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    } else {
      res.json(data);
    }
  });
};
