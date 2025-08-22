// Controllers/serviceController.js
const Service = require("../Models/Service");

exports.addService = async (req, res) => {
  try {
    const { title, desc, price, duration } = req.body; // extract all
    const service = new Service({ title, desc, price, duration });
    await service.save();
    res.status(201).json(service);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
