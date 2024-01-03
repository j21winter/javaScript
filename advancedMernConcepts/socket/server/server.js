const express = require('express');
const app = express();
const cors = require('cors');
const socket = require('socket.io');
const port = 8000;
app.use(cors());
 
const server = app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});
 

const io = socket(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST'],
        allowedHeaders: ['*'],
        credentials: true,
    }
});


io.on("connection", socket => {
    console.log('socket id: ' + socket.id)
    console.log("Nice to meet you")

    socket.emit("welcome", { message: "Welcome to my app" })

    socket.on("event_from_client", data => {
        socket.emit("event_to_all_other_clients", "WELCOME")
    })
})