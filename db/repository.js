const Contacts = require('./recordSchema');

exports.getUsers = async () => {
    console.log('try to read users start');
    try {
        return await Contacts.find({});
    }
    catch (error) {
        console.log('Users cannot read: ' + err);
    }
}