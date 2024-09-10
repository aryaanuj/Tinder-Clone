const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/profile/:id", userController.getUserProfile);
router.get("/nearby", userController.getNearbyUsers);

module.exports = router;
