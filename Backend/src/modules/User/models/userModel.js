const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, enum: ["male", "female", "non-binary", "other"], required: true },
    location: {
        type: { type: String, enum: ["Point"], default: "Point" },
        coordinates: { type: [Number], required: true },
    },
    profilePictures: [{ type: String }],
    bio: { type: String, maxlength: 500 },
    interests: [{ type: String }],
    relationshipGoals: {
        type: String,
        trim: true,
    },
    height: {
        type: Number,
        min: 0,
    },
    relationshipType: {
        type: String,
        enum: ["monogamy", "ethical non-monogamy", "polyamory", "open to exploring"],
        default: "monogamy",
    },
    languagesIKnow: {
        type: [String],
        default: [],
    },
    moreAboutMe: {
        zodiac: {
            type: String,
            trim: true,
        },
        education: {
            type: String,
            trim: true,
        },
    },
    lifeStyle: {
        pets: {
            type: [String],
            default: [],
        },
        drinking: {
            type: String,
            enum: ["Never", "Socially", "Regularly", "Occasionally"],
            default: "Never",
        },
        smoking: {
            type: String,
            enum: ["Never", "Occasionally", "Regularly"],
            default: "Never",
        },
        workout: {
            type: String,
            enum: ["Never", "Occasionally", "Regularly"],
            default: "Never",
        },
        dietaryPreference: {
            type: String,
            enum: ["Vegetarian", "Vegan", "Non-Vegetarian", "Other"],
            default: "Vegetarian",
        },
        socialMeditations: {
            type: [String],
            default: [],
        },
        sports: {
            type: [String],
            default: [],
        },
    },
    jobTitle: {
        type: String,
        trim: true,
    },
    company: {
        type: String,
        trim: true,
    },
    school: {
        type: String,
        trim: true,
    },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    matches: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    createdAt: { type: Date, default: Date.now },
    lastLogin: { type: Date },
    settings: {
        distanceRange: { type: Number, default: 50 },
        ageRange: { type: [Number], default: [18, 100] },
        showMe: { type: String, enum: ["male", "female", "everyone"], default: "everyone" },
    },
    reports: [{ type: mongoose.Schema.Types.ObjectId, ref: "Report" }],
    blockedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

UserSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("User", UserSchema);
