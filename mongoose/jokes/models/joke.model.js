const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, 'Setup field required'],
        minlength: [10, 'Setup length must be more than 10 characters']

    },
    punchline: {
        type: String,
        required: [true, 'Punchline field required'],
        minlength: [3, 'Setup length must be more than 3 characters']

    }
});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;