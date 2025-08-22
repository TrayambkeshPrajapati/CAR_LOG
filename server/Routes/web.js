const express = require("express");
const CarController = require("../Controllers/carController");
const UserController = require("../Controllers/UserController");
const ServiceController = require("../Controllers/serviceController");
const checkAuth = require("../middleware/auth");

const router = express.Router();

// User routes
router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/userprofile", checkAuth, UserController.profile);
router.get("/logout", UserController.logout);

// Car service routes (protected)
router.post("/cars", checkAuth, CarController.addServiceRecord);
router.get("/cars", checkAuth, CarController.getServiceRecords);
router.put("/cars/:id", checkAuth, CarController.updateServiceRecord);
router.delete("/cars/:id", checkAuth, CarController.deleteServiceRecord);

// Get all services
router.get("/services", ServiceController.getServices);
// Add a service
router.post("/services", ServiceController.addService);
module.exports = router;
