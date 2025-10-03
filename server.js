const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Backend is running successfully 🚀" });
});

// Login route
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email === "test@example.com" && password === "1234") {
    res.json({ success: true, message: "Login successful" });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

// Register route
app.post("/register", (req, res) => {
  const { email, password } = req.body;
  res.json({ success: true, message: "User registered", email, password });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));
