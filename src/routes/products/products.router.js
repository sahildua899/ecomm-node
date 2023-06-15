const express = require('express');
const {httpFindProducts, httpAddNewProduct, httpUpdateProduct,httpDeleteProduct} = require('./products.contoller')

const productsRouter = express.Router();

productsRouter.get('/', httpFindProducts);
productsRouter.post('/', httpAddNewProduct);
productsRouter.put('/', httpUpdateProduct);
productsRouter.delete('/', httpDeleteProduct);


module.exports = productsRouter;