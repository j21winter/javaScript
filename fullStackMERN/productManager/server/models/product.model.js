const mongoose = require('mongoose') // import mongoose

// create new schema
const ProductSchema = mongoose.Schema({
    title: {
        type : String,
        required : [true, "Title is required"],
        minlength: [3, "Title must be at least 3 characters long"]
    },
    price: {
        type : Number,
        required : [true, "Price is required"],
        min : [1, 'Price must be 1 or more']
    },
    description: {
        type : String,
        required : [true, "Description is required"],
        minlength: [10, "Description must be at least 10 characters long"]
    }
}, {timestamps : true})

// export and create collection with the schema
module.exports = mongoose.model('Product', ProductSchema)