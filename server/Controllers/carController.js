const Car = require("../Models/Car");

class CarController {
  static async addServiceRecord(req, res) {
    try {
      const serviceRecord = new Car({
        ...req.body,
        userId: req.user._id,
      });
      await serviceRecord.save();
      res.status(201).json(serviceRecord);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getServiceRecords(req, res) {
    try {
      const records = await Car.find({ userId: req.user._id });
      res.status(200).json(records);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async updateServiceRecord(req, res) {
    try {
      const record = await Car.findOneAndUpdate(
        { _id: req.params.id, userId: req.user._id },
        req.body,
        { new: true }
      );
      if (!record) return res.status(404).json({ message: "Record not found" });
      res.status(200).json(record);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async deleteServiceRecord(req, res) {
    try {
      const record = await Car.findOneAndDelete({
        _id: req.params.id,
        userId: req.user._id,
      });
      if (!record) return res.status(404).json({ message: "Record not found" });
      res.status(200).json({ message: "Record deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = CarController;
