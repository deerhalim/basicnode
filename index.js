const express = require('express');
const db = require('./db/connector');
const repository = require('./db/repository');

const app = express();
db.connect();
app.get('/',  function (req, res) {
  
    console.log('getUsers is started');
    repository.getUsers().then((users)=>{
        console.log('try to read users end');
        res.json(users);    
        res.end();
    });
    
});
app.listen(3000);