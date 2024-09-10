const express = require("express");
const messageController = require("../controllers/messageController");

const router = express.Router();

router.post("/send", messageController.sendMessage);
router.get("/match/:matchId", messageController.getMessages);

module.exports = router;
