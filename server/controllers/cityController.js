const db = require("../db");

exports.getAllCities = (req, res) => {
  const sql = `SELECT City_Table.City_Id, City_Table.City_Name, State_Table.state_name FROM City_Table JOIN State_Table ON City_Table.State_Id = State_Table.stateId`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    } else {
      return res.json(data);
    }
  });
};

exports.createCity = (req, res) => {
  const sql = `INSERT INTO City_Table (City_Name, State_Id) VALUES (?,?)`;

  const values = [req.body.City_Name, req.body.State_Id];

  db.query(sql, values, (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    } else {
      return res.json(data);
    }
  });
};

exports.deleteCity = (req, res) => {
  const sql = "DELETE FROM City_Table WHERE City_Id = ?";
  const id = req.params.id;

  db.query(sql, [id], (err, data) => {
    if (err) {
      res.json({ Error: "Error" });
    } else {
      res.json(data);
    }
  });
};

exports.updateCity = (req, res) => {
  const id = req.params.id;
  const sql = `UPDATE City_Table SET City_Name = ?, State_Id = ? WHERE City_Id = ?`;

  const values = [req.body.City_Name, req.body.State_Id];

  db.query(sql, [...values, id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    } else {
      res.json(data);
    }
  });
};

exports.getCitiesRecord = (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM City_Table WHERE City_Id = ?";
  // console.log(id);
  db.query(sql, [id], (err, data) => {
    if (err) {
      res.json({ Error: "Error" });
    } else {
      res.json(data);
    }
  });
};
