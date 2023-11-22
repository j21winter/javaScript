const Joke = require('../../models/joke.model')

// FIND ALL JOKES
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(( allJokes ) => {
            res.json({ jokes: allJokes })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        })
}

// FIND ONE JOKE
module.exports.findOneJoke =( req, res) => {
    Joke.find({_id : req.params.id})
        .then( (joke) => {
            res.json({joke : joke})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        })
}

// CREATE JOKE
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then( newlyCreatedJoke => {
            res.json({ joke: newlyCreatedJoke})
        })
        .catch( (err) => {
            res.json({ message: 'Something went wrong', error: err })
        })
    }

// UPDATE JOKE
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
    .then( (updateJoke) => {
        res.json({updateJoke : updateJoke})
    })
    .catch( (err) => {
        res.json({ message: 'Something went wrong', error: err })
    })
}

// DELETE JOKE
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id})
        .then(result => {
            res.json({ result: result})
        })
        .catch((err) => {
            res.json({ message: "something went wrong", error: err})
        })
}
