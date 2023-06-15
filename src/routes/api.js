const express = require('express');
const productsRouter = require('./products/products.router');
const usersRouter = require('./users/users.router');
const ordersRouter = require('./orders/orders.router')

const api = express.Router();

api.use('/products', productsRouter);
api.use('/users', usersRouter),
api.use('/orders', ordersRouter)

module.exports = api;