const Users = require('./recordSchema');

exports.getUsers = async () => {
    console.log('try to read users start');
    try {
        return await Users.find({});
        
        //   console.log(users);
        //  console.log(users[0])
    }
    catch (error) {
        console.log('Users cannot read: ' + err);
    }
}