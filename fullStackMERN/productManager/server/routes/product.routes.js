const productController = require('../controllers/product.controller') //import the controller to find the functions

module.exports = app => {
    app.get('/', productController.functionName),
    app.get('/find/all', productController.findAll)
    app.get('/find/:id', productController.findOne)
    app.post('/', productController.createProduct)
    app.patch('/:id', productController.updateOne)
    app.delete('/:id', productController.deleteOne)
}