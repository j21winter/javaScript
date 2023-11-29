// IMPORT MONGOOSE
const mongoose = require('mongoose');

// Create new schema variable with the mongoose schema method.
const PersonSchema = new mongoose.Schema({
    // Object specifications
    firstName: { type: String },
    lastName: { type: String }
}, { timestamps: true });

// EXPORT THE SCHEMA
module.exports = mongoose.model('Person', PersonSchema); // 'Person'is my collection
