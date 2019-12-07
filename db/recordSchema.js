const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: String,
    surname: String,
    imageSource: String,
    eMailAdress: String,
    phoneNumber: String,
    addedDate: Date,
    isFavorite: Boolean,
    birthday: String
});
module.exports = mongoose.model('Contacts', userSchema, 'Contacts');