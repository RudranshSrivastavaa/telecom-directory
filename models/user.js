const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    contact: {
        type: String, 
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
