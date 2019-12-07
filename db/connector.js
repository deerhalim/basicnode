const mongoose = require('mongoose');
const fs = require('fs');

exports.connect = () => {
    const rawdata = fs.readFileSync('config.json');
    const config = JSON.parse(rawdata);
    mongoose.connect(config.mongoUrl,
        function (err) {
            if (err)
                console.log('Unable to connect to database :', err);
            else
                console.log('Connected to ContactList successfully');
        },
        { useUnifiedTopology: true, useNewUrlParser: true })
}
