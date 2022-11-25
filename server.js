const express = require('express'),
    app = express(),
    path = require('path');

let serverPort = 8082;

app.use(express.static('public'))
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.listen(serverPort, async () => {
    console.log("System: Listening on " + serverPort);
});

process.on('uncaughtException', err => {
    console.error(err && err.stack);
});
