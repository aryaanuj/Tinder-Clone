const Message = require("../models/messageModel");

class MessageRepository {
    async createMessage(messageData) {
        return Message.create(messageData);
    }

    async findMessagesByMatch(matchId) {
        return Message.find({ match: matchId });
    }
}

module.exports = new MessageRepository();
