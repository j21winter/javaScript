const MessageController = require('../controllers/message.controller')

module.exports = app => {
    app.get('/api/messages', MessageController.findAll)
    app.post('/api/messages', MessageController.addMessage)
}