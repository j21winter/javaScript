const mongoose = require('mongoose') // import mongoose

// create new schema
const ProductSchema = mongoose.Schema({
    title: {
        type : String
    },
    price: {
        type : Number
    },
    description: {
        type : String
    }
}, {timestamps : true})

// export and create collection with the schema
module.exports = mongoose.model('Product', ProductSchema)