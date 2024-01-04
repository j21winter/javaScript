const express = require('express');
const app = express();
const cors = require('cors');
const socket = require('socket.io');
const port = 8000;

app.use(cors());
app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 

const server = app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});

require('./config/mongoose.config')
require('./routes/message.routes')(app)

const io = socket(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST'],
        allowedHeaders: ['*'],
        credentials: true,
    }
});

// note Socket Event listeners
io.on("connection", socket => {
    console.log('socket id: ' + socket.id)
    console.log("Nice to meet you")

    // Send welcome to my app when a user connects
    socket.emit("welcome", { message: "Welcome to my app" })

    // When we receive a new message from a user, distribute it to the rest fo the users to update their dom
    socket.on("newMessage", data => {
        io.emit("newMessageAvailable", data)
    })
})