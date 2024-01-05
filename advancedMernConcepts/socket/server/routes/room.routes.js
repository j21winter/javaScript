const RoomController = require('../controllers/room.controller')

module.exports = app => {
    app.get('/api/rooms', RoomController.findAll)
    app.post('/api/rooms', RoomController.addRoom)
}