const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    // Object specifications
    name: { 
        type: String,
        minLength: [3, "Name must be at least 3 characters."],
        required: [true, "Name cannot be blank."]}
    }, { timestamps: true });


// EXPORT THE SCHEMA
module.exports = mongoose.model('Author', AuthorSchema);