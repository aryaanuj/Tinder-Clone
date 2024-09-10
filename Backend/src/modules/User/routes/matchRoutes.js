const express = require("express");
const matchController = require("../controllers/matchController");

const router = express.Router();

router.post("/create", matchController.createMatch);
router.get("/user-matches", matchController.getUserMatches);

module.exports = router;
