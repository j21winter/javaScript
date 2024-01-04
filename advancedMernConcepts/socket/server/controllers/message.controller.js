const Message = require('../models/message.model')


const addMessage = (req, res) => {
    Message.create(req.body)
        .then(message => res.json(message))
        .catch(err => response.status(400).json(err))
}

const findAll = (req, res) => {
    Message.find()
        .then(allMessages => res.json(allMessages))
        .catch(err => response.status(400).json(err))
}
module.exports = {
    addMessage,
    findAll
}