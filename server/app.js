const express = require("express");
const cookieParser = require("cookie-parser");
const connectDB = require("./DB/connectDB");
const webRoutes = require("./Routes/web");
const cors = require("cors");
require("dotenv").config(); // <-- load .env variables

const app = express();
const PORT = process.env.PORT || 3000; // fallback if .env missing

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

// Middleware
app.use(express.json());
app.use(cookieParser());

// Connect to DB
connectDB();

// Routes
app.use("/api", webRoutes);

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
