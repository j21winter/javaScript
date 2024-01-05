const Room = require('../models/room.model')

const addRoom = (req, res) => {
    Room.create(req.body)
        .then(room => res.json(room))
        .catch(err => res.status(400).json(err))
}

const findAll = (req, res) => {
    Room.find()
        .then(allRooms => res.json(allRooms))
        .catch(err => console.log(err))
}

module.exports = {
    addRoom, 
    findAll
}