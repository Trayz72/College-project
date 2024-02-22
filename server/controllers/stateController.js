const db = require("../db");

// Get all states
exports.getAllStates = (req, res) => {
  const sql = "SELECT * FROM State_Table";
  db.query(sql, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.json(data);
  });
};

exports.createState = (req, res) => {
  const sql = "INSERT INTO State_Table (state_name) VALUES (?)";
  const values = [req.body.state_name];

  db.query(sql, values, (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    } else {
      res.json(data);
    }
  });
};

exports.updateState = (req, res) => {
  const sql = "UPDATE State_Table SET state_name = ? WHERE stateId = ?";

  const values = [req.body.state_name, req.params.id];
  db.query(sql, values, (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    } else {
      res.json(data);
    }
  });
};

exports.deleteState = (req, res) => {
  const sql = "DELETE FROM State_Table WHERE stateId = ?";
  const id = req.params.id;

  db.query(sql, [id], (err, data) => {
    if (err) {
      res.json({ Error: "Error" });
    } else {
      res.json(data);
    }
  });
};

// Get a single state record by ID
exports.getStateRecord = (req, res) => {
  const sql = "SELECT * FROM State_Table WHERE stateId = ?";
  const id = req.params.id;

  db.query(sql, [id], (err, data) => {
    if (err) {
      res.json({ Error: "Error" });
    } else {
      res.json(data);
    }
  });
};
