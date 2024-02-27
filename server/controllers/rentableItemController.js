const db = require("../db");

exports.createRentItem = (req, res) => {
  const { ItemName, Description, Rent_per_hour } = req.body;

  const query = `
    INSERT INTO RentableItem (ItemName, Description, Rent_per_hour)
    VALUES (?, ?, ?)
  `;

  db.query(query, [ItemName, Description, Rent_per_hour], (err, result) => {
    if (err) {
      console.error("Error adding RentableItem:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(201).json({
        message: "RentableItem added successfully",
        itemId: result.insertId,
      });
    }
  });
};

exports.getAllRentItems = (req, res) => {
  db.query("SELECT * FROM RentableItem", (err, results) => {
    if (err) {
      console.error("Error fetching RentableItems:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(200).json(results);
    }
  });
};

exports.updateRentItem = (req, res) => {
  const itemId = req.params.id;
  const { ItemName, Description, Rent_per_hour } = req.body;

  const query = `
      UPDATE RentableItem
      SET ItemName=?, Description=?, Rent_per_hour=?
      WHERE ItemId=?
    `;

  db.query(
    query,
    [ItemName, Description, Rent_per_hour, itemId],
    (err, result) => {
      if (err) {
        console.error("Error updating RentableItem:", err);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        res.status(200).json({ message: "RentableItem updated successfully" });
      }
    }
  );
};

exports.deleteRentItem = (req, res) => {
  const itemId = req.params.id;

  const query = "DELETE FROM RentableItem WHERE ItemId=?";

  db.query(query, [itemId], (err, result) => {
    if (err) {
      console.error("Error deleting RentableItem:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(200).json({ message: "RentableItem deleted successfully" });
    }
  });
};
