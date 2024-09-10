const matchService = require("../services/matchService");

class MatchController {
    async createMatch(req, res) {
        try {
            const match = await matchService.createMatch(req.body.user1, req.body.user2);
            res.json(match);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getUserMatches(req, res) {
        try {
            const matches = await matchService.getUserMatches(req.user.id);
            res.json(matches);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new MatchController();
