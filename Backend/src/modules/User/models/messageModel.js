const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    match: { type: mongoose.Schema.Types.ObjectId, ref: "Match", required: true },
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    content: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    isRead: { type: Boolean, default: false },
});

module.exports = mongoose.model("Message", MessageSchema);
