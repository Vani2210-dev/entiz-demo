const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    sentFollowRequest: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    receiveFollowRequest: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    follower: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    verified: {
        type: Boolean,
        default: false,
    },
    verificationToken: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;