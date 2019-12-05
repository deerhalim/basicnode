var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
io.on('connection', function (client) {
    client.on('join', function (name) {
        client.nickname = name;
        console.log('io connection()');
    });
    client.on('messages', function (data) {
        var nickname = client.nickname;
        client.broadcast.emit('messages', nickname + ': ' + message);
    })

});
app.get('/', function (req, res) {

    res.write("test");

});
server.listen(3000);