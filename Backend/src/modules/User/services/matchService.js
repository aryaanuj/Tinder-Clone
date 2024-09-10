const matchRepository = require("../repositories/matchRepository");

class MatchService {
    async createMatch(user1, user2) {
        const existingMatch = await matchRepository.findMatchByUsers(user1, user2);
        if (existingMatch) return existingMatch;
        return matchRepository.createMatch({ user1, user2, isMatched: true });
    }

    async getUserMatches(userId) {
        return matchRepository.findAllMatchesForUser(userId);
    }
}

module.exports = new MatchService();
