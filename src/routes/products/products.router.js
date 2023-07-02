const express = require('express');
const {httpFindProducts, httpAddNewProduct, httpUpdateProduct,httpDeleteProduct, httpFindProductById} = require('./products.contoller')

const productsRouter = express.Router();

productsRouter.post('/', httpFindProducts);
productsRouter.post('/addNew', httpAddNewProduct);
productsRouter.post('/:id', httpFindProductById)
productsRouter.put('/', httpUpdateProduct);
productsRouter.delete('/', httpDeleteProduct);


module.exports = productsRouter;