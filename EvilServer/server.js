const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', function (socket) {
    console.log('Connect to Replay');
});

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.get('/report', function (req, res, next) {
    console.log(req.ip, req.query, Date.now());
    io.emit("UPDATE", {
        ...req.query,
        timestamp: Date.now()
    });
    res.json({msg: "Report Success"});
});

http.listen(3000, function () {
    console.log('Evil server listening at localhost:3000');
});
