const mongoose = require("mongoose")

// data shape
const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    city: String
});
const User = mongoose.model('Users', userSchema);

module.exports = User