const AuthorController = require('../controllers/author.controller');


// LIST OF ROUTES with functions HERE...
module.exports = app => {
    app.get('/api/authors', AuthorController.findAll)
    app.get('/api/authors/:id', AuthorController.findOne)
    app.post('/api/authors', AuthorController.createAuthor)
    app.patch('/api/authors/:id', AuthorController.updateOne)
    app.delete('/api/authors/:id', AuthorController.deleteOne)
};
