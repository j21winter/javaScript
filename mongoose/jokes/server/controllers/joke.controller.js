const Joke = require('../models/joke.model')

// FIND ALL JOKES
const findAllJokes = (req, res) => {
    Joke.find()
        .then(( allJokes ) => {
            res.json({ jokes: allJokes })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        })
}

// FIND ONE JOKE
const findOneJoke =( req, res) => {
    Joke.find({_id : req.params.id})
        .then( (joke) => {
            res.json({joke : joke})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        })
}

// CREATE JOKE
const createJoke = (req, res) => {
    Joke.create(req.body)
        .then( newlyCreatedJoke => {
            res.json({ joke: newlyCreatedJoke})
        })
        .catch( (err) => {
            res.json({ message: 'Something went wrong', error: err })
        })
    }

// UPDATE JOKE
const updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
    .then( (updatedJoke) => {
        res.json({updatedJoke : updatedJoke})
    })
    .catch( (err) => {
        res.json({ message: 'Something went wrong', error: err })
    })
}

// DELETE JOKE
const deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id})
        .then(result => {
            res.json({ result: result})
        })
        .catch((err) => {
            res.json({ message: "something went wrong", error: err})
        })
}

module.exports = {
    findAllJokes,
    findOneJoke,
    createJoke, 
    updateJoke,
    deleteJoke
}
