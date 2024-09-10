const mongoose = require("mongoose");

const MatchSchema = new mongoose.Schema({
    user1: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    user2: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    user1Liked: { type: Boolean, default: false },
    user2Liked: { type: Boolean, default: false },
    isMatched: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Match", MatchSchema);
