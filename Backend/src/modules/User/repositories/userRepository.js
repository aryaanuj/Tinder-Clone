const mongoose = require("mongoose");
const User = require("../models/userModel");

class UserRepository {
    async createNewUser(userData) {
        return User.create(userData);
    }

    async findUserById(id) {
        return User.findById(id);
    }

    async findUserByEmail(email) {
        return User.findOne({ email });
    }

    async findUsersWithinRadius(coordinates, radiusInKm) {
        const radiusInRadians = radiusInKm / 6378.1; // Earth's radius in km
        return User.find({
            location: {
                $geoWithin: {
                    $centerSphere: [coordinates, radiusInRadians],
                },
            },
        });
    }
}

module.exports = new UserRepository();
