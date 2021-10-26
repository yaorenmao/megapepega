const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
var xy = {x:0, y:0};

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');//Дать инфу клиенту о том, что уже на серве
    xy = {x:Math.floor(Math.random() * 300), y:Math.floor(Math.random() * 300)};
    io.sockets.emit('update', xy);//Добавить всем онфо о новом клиенте
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});