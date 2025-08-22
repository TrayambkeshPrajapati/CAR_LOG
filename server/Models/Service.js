const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: String, required: true },
});

module.exports = mongoose.model("Service", serviceSchema);
