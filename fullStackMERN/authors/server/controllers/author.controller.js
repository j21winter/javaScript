const Author = require('../models/author.model');


// ROUTE FUNCTIONS GO HERE...
// CREATE
const createAuthor = (request, response) => {
    Author.create(request.body)
        .then(newAuthor => response.json(newAuthor))
        .catch(err => response.status(400).json(err))
    }

// READ
const findOne = (request, response) => {
    Author.findById(request.params.id)
    .then(author => response.json(author))
    .catch(err => response.status(400).json(err))
    }

const findAll = (request, response) => {
    Author.find()
    .then(allAuthors => response.json(allAuthors))
    .catch(err => response.status(400).json(err))
    }

// UPDATE 
const updateOne = (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    Author.findByIdAndUpdate( req.params.id, req.body, {new: true, runValidators: true} )
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json(err))
}

// DELETE
const deleteOne = (request, response) => {
    Author.findByIdAndDelete(request.params.id)
    .then(deletedAuthor => response.json(deletedAuthor))
    .catch(err => response.status(400).json(err))
    }

// EXPORT ROUTE FUNCTIONS HERE...
module.exports = {
    createAuthor,
    findOne,
    findAll, 
    updateOne,
    deleteOne
};
