require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");
const hostRouter = require("./routes/host");
const userRouter = require("./routes/user");

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(bodyParser.json({ extended: true }));

const EDENAI_AI_KEY = process.env.EDENAI_AI_KEY;

// Route to generate an image using DeepAI
app.post("/generate-image", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await axios.post(
      "https://api.edenai.run/v2/image/generation",
      {
        providers: "stabilityai",
        text: prompt,
        resolution: "512x512",
      },
      {
        headers: {
          Authorization: `Bearer ${EDENAI_AI_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const imageUrl = response.data.stabilityai.items[0].image_resource_url;
    res.json({ imageUrl });
  } catch (error) {
    console.error(
      "Error generating image:",
      error.response?.data || error.message
    );
    res.status(500).json({ error: "Image generation failed" });
  }
});

app.post("/InteriorPersonResgitartionForm", (req, res, next) => {
  const {
    FullName,
    Email,
    PhoneNumber,
    Experience,
    Education,
    Certificates,
    Specialization,
    Portfolio,
    PreviousJobTitle,
  } = req.body;

  if (
    (!FullName,
    !Email,
    !PhoneNumber,
    !Experience,
    !Education,
    !Certificates,
    !Specialization,
    !Portfolio,
    !PreviousJobTitle)
  ) {
    return res.status(404).json({ message: "All fields are required!" });
  }

  if (
    (FullName,
    Email,
    PhoneNumber,
    Experience,
    Education,
    Certificates,
    Specialization,
    Portfolio,
    PreviousJobTitle)
  ) {
    const query =
      "INSERT INTO InteriorPersonResgitartionForm (FullName, Email, PhoneNumber, Experience, Education, Certificates, Specialization, Portfolio, PreviousJobTitle) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(
      query,
      [
        FullName,
        Email,
        PhoneNumber,
        Experience,
        Education,
        Certificates,
        Specialization,
        Portfolio,
        PreviousJobTitle,
      ],
      (err, result) => {
        if (err) {
          console.log("Error fetching data: ", err);
          res.status(500).json({ message: "Database error occurred." });
        } else if (results.length > 0) {
          res.status(200).json({ message: "Login successful!" });
        } else {
          res.status(400).json({ message: "Invalid email or password." });
        }
      }
    );
  } else {
    res.status(400).json({ message: "All fields are required!" });
  }
});

app.use(hostRouter);
app.use(userRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
