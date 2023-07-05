// Declare middleware that is used to serve requests. This is a bit tricky because we don't want to require them everywhere
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const app = express();
const authRoutes  = require("./routes/authRoutes")

// This is the function that is called when dotenv is loaded. You can use it to set environment variables
dotenv.config();

// This is the function that connects the database. You don't need to call
connectDB();

// Add express. json. cors to the app's route
app.use(express.json());
app.use(cors);

// Add routes for CRUD auth endpoints to the end of the application. This is called after the app has been configured to use CRUD
app.use("/api/auth", authRoutes);

// Start listening for service discovery requests. This is a blocking call and will return immediately
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
