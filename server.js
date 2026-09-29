
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/script.js", (req, res) => {
  res.sendFile(path.join(__dirname, "script.js"));
});

app.post("/login", (req, res) => {
  const { email, password } = req.body || {};

  // Independently validate inputs on the server
  if (typeof email !== "string" ||
      typeof password !== "string" ||
      !email.trim() ||
      !password) {
    return res.status(400).json({
      message: "All fields are required."
    });
  }

  if (!email.includes("@")) {
    return res.status(400).json({
      message: "Invalid email address."
    });
  }

  if (password.length < 8) {
    return res.status(400).json({
      message: "Password must be at least 8 characters."
    });
  }

  // Demo only: no real authentication or database
  return res.json({
    message: "Validation successful! Demo login accepted."
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
