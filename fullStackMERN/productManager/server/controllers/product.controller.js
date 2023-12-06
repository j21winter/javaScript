const Product = require('../models/product.model') // import the product model

// module export wrapper
module.exports = {

    // ROUTE FUNCTIONS
    
    // ! TEST FUNCTION
    functionName: (req, res) => {
        // FUNCTION HERE...
        res.json({ message : 'hello world'})
    },

    // CREATE
    createProduct: (req, res) => {
        Product.create(req.body)
            .then(newProduct => res.json(newProduct))
            .catch(err => res.status(400).json(err))
    },

    // READ
    findOne: (req, res) => {
        Product.findById( req.params.id )
            .then(foundProduct => res.json( foundProduct ))
            .catch(err => res.status(400).json(err))
    },

    findAll: (req, res) => {
        Product.find()
            .then(productList => res.json(productList))
            .catch(err => res.status(400).json(err))
    },

    // UPDATE
    updateOne: (req, res) => {
        console.log(req.params.id)
        console.log(req.body)
        Product.findByIdAndUpdate( req.params.id, req.body, {new: true, runValidators: true} )
            .then(updatedProduct => res.json(updatedProduct))
            .catch(err => res.status(400).json(err))
    },
    
    // DELETE
    deleteOne: (req, res) => {
        Product.findByIdAndDelete( req.params.id )
            .then(deletedProduct => res.json(deletedProduct))
            .catch(err => res.status(400).json(err))
    }



}





