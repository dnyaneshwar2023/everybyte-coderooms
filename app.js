const express = require('express')
const cors = require('cors')
const socket = require('socket.io')
const path = require('path')
const app = express()
app.use(cors())
app.use(express.static(path.join(__dirname, 'client/build')));

const port = process.env.PORT || 5000;

app.get('/test', (req, res) => {
    res.send("API Called successfully")
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const server = app.listen(port, () => {
    console.log(`connected at port ${port}`)
})


const io = socket(server, {
    cors: true,
    origins: ['http://localhost:5000']
})

io.on('connection', (client, roomid) => {

    console.log(roomid);
    client.join(roomid)

    client.on('codeChange', (data) => {
        client.broadcast.to(roomid).emit('codeChange', data)
    })

    client.on('changeLanguage', (data) => {
        client.broadcast.to(roomid).emit('changeLanguage', data)
    })

    client.on('changeInput', (data) => {
        client.broadcast.to(roomid).emit('changeInput', data)
    })
    client.on('changeOutput', (data) => {
        client.broadcast.to(roomid).emit('changeOutput', data)
    })
})
