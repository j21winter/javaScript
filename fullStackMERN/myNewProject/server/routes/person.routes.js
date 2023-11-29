// IMPORT THE CONTROLLER HERE...
const PersonController = require('../controllers/person.controller')

// LIST OF ROUTES with functions HERE...
module.exports = app => {
    app.get('/api' , PersonController.index)
    app.post('/api/people', PersonController.createPerson)
}