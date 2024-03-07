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
      res.json({ message: "User registered successfully" });
    }
  });
};

exports.login = (req, res) => {
  const { username, password } = req.body;

  const adminSql =
    "SELECT * FROM Admin_Table WHERE User_Name = ? AND Password = ?";
  const userSql =
    "SELECT * FROM User_Account WHERE Username = ? AND Password = ?";
  const workerSql =
    "SELECT * FROM Worker WHERE WorkerName = ? AND Password = ?";

  db.query(adminSql, [username, password], (adminErr, adminResult) => {
    if (adminErr) {
      console.error("Error logging in as admin:", adminErr);
      res.status(500).json({ error: "Internal Server Error" });
    } else if (adminResult.length > 0) {
      // Admin login successful
      const { Admin_Id } = adminResult[0];
      res.json({
        message: "Admin login successful",
        userType: "admin",
        userId: Admin_Id,
      });
    } else {
      db.query(userSql, [username, password], (userErr, userResult) => {
        if (userErr) {
          console.error("Error logging in as user:", userErr);
          res.status(500).json({ error: "Internal Server Error" });
        } else if (userResult.length > 0) {
          // User login successful
          const { UserId } = userResult[0];
          res.json({
            message: "User login successful",
            userType: "user",
            userId: UserId,
          });
        } else {
          db.query(
            workerSql,
            [username, password],
            (workerErr, workerResult) => {
              if (workerErr) {
                console.error("Error logging in as worker:", workerErr);
                res.status(500).json({ error: "Internal Server Error" });
              } else if (workerResult.length > 0) {
                // Worker login successful
                const { WorkerID } = workerResult[0];
                res.json({
                  message: "Worker login successful",
                  userType: "worker",
                  userId: WorkerID,
                });
              } else {
                res.status(401).json({ error: "Invalid credentials" });
              }
            }
          );
        }
      });
    }
  });
};
