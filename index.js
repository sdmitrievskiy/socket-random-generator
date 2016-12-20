'use strict';

const PORT = 1213;
const HEARTBEAT = 3000;

const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const dataGen = require('./dataGen');

app.use(express.static('public/'));

setInterval(() => {
    io.emit('data', { data: dataGen() });
}, HEARTBEAT);

app.get('/data', function(req, res) {
    res.json({ data: dataGen() })
});

http.listen(PORT, function(){
  console.log(`listening on *:${PORT}`);
});
