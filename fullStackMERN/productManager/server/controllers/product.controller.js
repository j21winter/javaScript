const Product = require('../models/product.model') // import the product model

// module export wrapper
module.exports = {

    // ROUTE FUNCTIONS
    
    // ! TEST FUNCTION
    functionName: (req, res) => {
        // FUNCTION HERE...
        res.json({ message : 'hello world'})
    },

    // TODO CREATE
    createProduct: (req, res) => {
        Product.create(req.body)
            .then(newProduct => res.json(newProduct))
            .catch(err =>  res.json(err))
    },

    // TODO READ
    findOne: (req, res) => {
        Product.find({_id : req.params.id})
            .then(foundProduct => res.json(foundProduct))
            .catch(err =>  res.json(err))
    },

    findAll: (req, res) => {
        Product.find()
            .then(productList => res.json(productList))
            .catch(err =>  res.json(err))
    },

    // TODO UPDATE
    updateOne: (req, res) => {
        Product.updateOne({_id: req.params.id}, {$set : req.body})
            .then(updateConfirmation => res.json(updateConfirmation))
            .catch(err =>  res.json(err))
    },
    
    // TODO DELETE
    deleteOne: (req, res) => {
        Product.deleteOne({_id: req.params.id})
            .then(deleteConfirmation => res.json(deleteConfirmation))
            .catch(err =>  res.json(err))
    }



}





