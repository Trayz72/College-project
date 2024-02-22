const db = require("../db");

exports.register = (req, res) => {
  const { username, password, email, contactNumber } = req.body;

  const sql =
    "INSERT INTO User_Account (Username, Password, Email, Contact_Number) VALUES (?, ?, ?, ?)";
  const values = [username, password, email, contactNumber];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error registering user:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      console.log("User registered successfully");
      res.json({ message: "User registered successfully" });
    }
  });
};

exports.login = (req, res) => {
  const { username, password } = req.body;

  const sql = "SELECT * FROM User_Account WHERE Username = ? AND Password = ?";
  const values = [username, password];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error logging in:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else if (result.length > 0) {
      res.json({ message: "Login successful" });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  });
};
