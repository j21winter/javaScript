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
            .catch(err =>  res.json(err))
    },

    // READ
    findOne: (req, res) => {
        Product.findById( req.params.id )
            .then(foundProduct => res.json( foundProduct ))
            .catch(err =>  res.json(err))
    },

    findAll: (req, res) => {
        Product.find()
            .then(productList => res.json(productList))
            .catch(err =>  res.json(err))
    },

    // UPDATE
    updateOne: (req, res) => {
        Product.findByIdAndUpdate( req.params.id, req.body )
            .then(updateConfirmation => res.json(updateConfirmation))
            .catch(err =>  res.json(err))
    },
    
    // DELETE
    deleteOne: (req, res) => {
        Product.findByIdAndDelete( req.params.id )
            .then(deletedProduct => res.json(deletedProduct))
            .catch(err =>  res.json(err))
    }



}





