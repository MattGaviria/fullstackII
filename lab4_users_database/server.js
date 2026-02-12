require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const usersRoutes = require("./routes/users");

const app = express();
app.use(express.json());

app.use("/users", usersRoutes);

const PORT = process.env.PORT || 8081;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection error:", err));
