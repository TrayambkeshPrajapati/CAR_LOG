const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  carModel: { type: String, required: true },
  serviceType: { type: String, required: true },
  serviceDate: { type: Date, required: true },
  cost: { type: Number, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Car", carSchema);
