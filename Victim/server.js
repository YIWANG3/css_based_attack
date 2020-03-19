const express = require('express');
const app = express();

app.use(express.static('examples'));
app.use(express.static('../public'));

app.listen(80, function () {
    console.log('Victim server listening at localhost:80');
});
