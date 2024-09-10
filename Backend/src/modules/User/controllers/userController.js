const userService = require("../services/userService");

class UserController {
    async createUser(req, res) {
        try {
            const user = await userService.registerUser(req.body);
            if (!user) return res.status(404).json({ message: "User not found" });
            res.json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getUserProfile(req, res) {
        try {
            const user = await userService.getUserById(req.params.id);
            if (!user) return res.status(404).json({ message: "User not found" });
            res.json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getNearbyUsers(req, res) {
        try {
            const nearbyUsers = await userService.getNearbyUsers(req.user.id, 50);
            res.json(nearbyUsers);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new UserController();
