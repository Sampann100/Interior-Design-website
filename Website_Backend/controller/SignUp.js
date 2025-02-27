const db = require("../db");

exports.signUpPage = (req, res) => {
  const { Username, Email, Password } = req.body;

  if (Username && Email && Password) {
    const query =
      "INSERT INTO signup (username, email, password) VALUES (?, ?, ?)";
    db.query(query, [Username, Email, Password], (err, result) => {
      if (err) {
        console.error("Error inserting data:", err);
        res.status(500).json({ message: "Database error occurred." });
      } else {
        res.status(200).json({ message: "Sign up successful!" });
      }
    });
  } else {
    res.status(400).json({ message: "All fields are required!" });
  }
}