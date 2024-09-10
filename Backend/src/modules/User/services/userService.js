const userRepository = require("../repositories/userRepository");

class UserService {
    async registerUser(userData) {
        return userRepository.createNewUser(userData);
    }

    async getUserById(id) {
        return userRepository.findUserById(id);
    }

    async getUserByEmail(email) {
        return userRepository.findUserByEmail(email);
    }

    async getNearbyUsers(userId, maxDistanceInKm) {
        const user = await userRepository.findUserById(userId);
        if (!user || !user.location) throw new Error("User not found or location not available.");
        return userRepository.findUsersWithinRadius(user.location.coordinates, maxDistanceInKm);
    }
}

module.exports = new UserService();
