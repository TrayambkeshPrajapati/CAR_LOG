const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const dbUrl =
      process.env.NODE_ENV === "production"
        ? process.env.LIVE_URL
        : process.env.MONGO_URL;

    await mongoose.connect(dbUrl);
    console.log("Database Connection successful");
  } catch (error) {
    console.error("Database Connection failed:", error.message);
  }
};

module.exports = connectDB;
