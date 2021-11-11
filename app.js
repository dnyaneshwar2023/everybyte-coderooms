const express = require('express')
const cors = require('cors')
const socket = require('socket.io')
const path = require('path')
const app = express()
const redisAdapter =  require('socket.io-redis');

// middlewares
app.use(cors())
app.use(express.static(path.join(__dirname, 'client/build')));

const port = process.env.PORT || 5000;


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const server = app.listen(port, () => {
    console.log(`connected at port ${port}`)
})


const io = socket(server, {
    cors: true,
})



io.adapter(redisAdapter({ host: process.env.REDIS_HOST || '127.0.0.1', port: 6379 }));


io.on('connection', (client) => {

    console.log('User Joined');
    client.on("join", (roomid) => {
        client.join(roomid)
    })

    client.on('codeChange', (e) => {
        client.broadcast.to(e.roomid).emit('codeChange', e.data)
    })

    client.on('changeLanguage', (e) => {
        client.broadcast.to(e.roomid).emit('changeLanguage', e.data)
    })

    client.on('changeInput', (e) => {
        client.broadcast.to(e.roomid).emit('changeInput', e.data)
    })
    client.on('changeOutput', (e) => {
        client.broadcast.to(e.roomid).emit('changeOutput', e.data)
    })
})
