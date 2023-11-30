const productController = require('../controllers/product.controller') //import the controller to find the functions

module.exports = app => {
    app.get('/api/products', productController.findAll)
    app.get('/api/products/:id', productController.findOne)
    app.post('/api/products', productController.createProduct)
    app.patch('/api/products/:id', productController.updateOne)
    app.delete('/api/products/:id', productController.deleteOne)
}