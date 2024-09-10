const Match = require("../models/matchModel");

class MatchRepository {
    async createMatch(matchData) {
        return Match.create(matchData);
    }

    async findMatchByUsers(user1, user2) {
        return Match.findOne({ user1, user2 });
    }

    async findAllMatchesForUser(userId) {
        return Match.find({ $or: [{ user1: userId }, { user2: userId }] });
    }
}

module.exports = new MatchRepository();
