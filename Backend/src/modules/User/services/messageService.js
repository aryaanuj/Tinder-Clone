const messageRepository = require("../repositories/messageRepository");

class MessageService {
    async sendMessage(messageData) {
        return messageRepository.createMessage(messageData);
    }

    async getMessagesForMatch(matchId) {
        return messageRepository.findMessagesByMatch(matchId);
    }
}

module.exports = new MessageService();
