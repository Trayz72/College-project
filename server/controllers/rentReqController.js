const db = require("../db");

exports.createRentRequest = (req, res) => {
  const { RequiredHours, DateTime, UserId, ItemId, TotalCost } = req.body;

  const query = `
    INSERT INTO RentRequest (RequiredHours, DateTime, UserId, ItemId, TotalCost)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [RequiredHours, DateTime, UserId, ItemId, TotalCost],
    (err, result) => {
      if (err) {
        console.error("Error adding RentRequest:", err);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        res.status(201).json({
          message: "RentRequest added successfully",
          requestId: result.insertId,
        });
      }
    }
  );
};

exports.getAllRentRequestsFormUser = (req, res) => {
  // const { userId } = req.query; // Use req.query instead of req.body for GET requests
  // console.log("Received userId in backend:", userId);

  // db.query(
  //   "SELECT * FROM RentRequest WHERE UserId = ?",
  //   [userId],
  //   (err, results) => {
  //     if (err) {
  //       console.error("Error fetching RentRequests:", err);
  //       res.status(500).json({ error: "Internal Server Error" });
  //     } else {
  //       console.log("Rent requests fetched successfully:", results);
  //       res.status(200).json(results);
  //     }
  //   }
  // );

  const query = `SELECT RentRequest.RequestId, RentRequest.RequiredHours, RentRequest.DateTime, RentableItem.ItemName,
  RentRequest.TotalCost,
  RentRequest.Status FROM RentRequest
  JOIN RentableItem ON RentRequest.ItemId = RentableItem.ItemId;`;
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching RentRequests:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(200).json(results);
    }
  });
};

exports.getAllRentRequest = (req, res) => {
  const query = `
  SELECT
      RentRequest.RequestId,
      RentRequest.RequiredHours,
      RentRequest.DateTime,
      User_Account.Username,
      User_Account.Email,
      User_Account.Contact_Number,
      RentableItem.ItemName,
      RentRequest.TotalCost,
      RentRequest.Status
  FROM RentRequest
  JOIN User_Account ON RentRequest.UserId = User_Account.UserId
  JOIN RentableItem ON RentRequest.ItemId = RentableItem.ItemId;
`;

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching RentRequests:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(200).json(results);
    }
  });
};

exports.updateRentReqStatus = (req, res) => {
  const requestId = req.params.id;
  const { Status } = req.body;

  const query = `
    UPDATE RentRequest
    SET Status=?
    WHERE RequestId=?
  `;

  db.query(query, [Status, requestId], (err, result) => {
    if (err) {
      console.error("Error updating RentRequest:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(200).json({ message: "RentRequest updated successfully" });
    }
  });
};

exports.deleteRentRequest = (req, res) => {
  const requestId = req.params.id;
  db.query(
    "DELETE FROM RentRequest WHERE RequestId = ?",
    [requestId],
    (err, data) => {
      if (err) {
        res.json({ Error: "Error" });
      } else {
        res.json(data);
      }
    }
  );
};
