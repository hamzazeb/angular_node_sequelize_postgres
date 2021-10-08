const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
const userRoute = require('./routes/user');
const channelRoute = require('./routes/channel');
const videoRoute = require('./routes/video');

var server = http.createServer(app);
const port = 5000;

// middlewares
app.use(cors());
app.use(express.json());
app.use('/api/users', userRoute);
app.use('/api/channels', channelRoute);
app.use('/api/videos', videoRoute);

// running nodejs server
nodeServer();
function nodeServer() {
    server.listen(port, function () {
        console.log((new Date()) + `: Server is listening on port ${port}`);
    });
}