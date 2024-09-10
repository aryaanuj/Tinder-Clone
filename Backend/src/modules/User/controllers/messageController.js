const messageService = require("../services/messageService");

class MessageController {
    async sendMessage(req, res) {
        try {
            const message = await messageService.sendMessage(req.body);
            res.json(message);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getMessages(req, res) {
        try {
            const messages = await messageService.getMessagesForMatch(req.params.matchId);
            res.json(messages);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new MessageController();
