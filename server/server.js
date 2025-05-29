const express = require("express");
const cors = require("cors");
const matchesRouter = require("./routes/matches");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/matches", matchesRouter);

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "Server is running!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
