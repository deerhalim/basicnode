const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: String,
    surname: String,
    age: Number
});
let Users = mongoose.model('user', userSchema, 'user');
module.exports = Users;