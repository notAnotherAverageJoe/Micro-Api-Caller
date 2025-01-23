const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Cors middleware for frontend and backend communication
app.use(cors());
app.use(bodyParser.json());

// All routes below
app.use("/app", userRoutes);

// Sserver runs on 4000
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
