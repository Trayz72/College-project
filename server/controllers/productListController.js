const db = require("../db");

exports.ProductList = (req, res) => {
  const sql =
    "SELECT ProductId, ProductName, ProductDescription, ProductPrice, Image FROM Products";
  db.query(sql, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.json(data);
  });
};
