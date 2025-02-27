const db = require("../db");

exports.loginPage = (req, res) => {
  const { Email, Password } = req.body;

  if (!Email || !Password) {
    return res.status(400).json({ message: "All fields are required!" });
  }
  if (Email && Password) {
    const query = "SELECT * FROM signup WHERE Email = ? AND Password = ?";
    db.query(query, [Email, Password], (err, results) => {
      if (err) {
        console.error("Error fetching data:", err);
        res.status(500).json({ message: "Database error occurred." });
      } else if (results.length > 0) {
        res.status(200).json({ message: "Login successful!" });
      } else {
        res.status(400).json({ message: "Invalid email or password." });
      }
    });
  } else {
    res.status(400).json({ message: "All fields are required!" });
  }
}