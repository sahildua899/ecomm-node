const express = require('express');
const {httpGetAllOrders, httpAddNewOrder, httpFindOrder, httpFindOrdersbyEmail, httpDeleteOrder} = require('../orders/orders.controller')

const ordersRouter = express.Router();

ordersRouter.post('/', httpGetAllOrders);
ordersRouter.post('/addNew', httpAddNewOrder);
ordersRouter.post('/:id', httpFindOrder);
ordersRouter.post('/find/:email', httpFindOrdersbyEmail);
ordersRouter.delete('/:id', httpDeleteOrder);

module.exports = ordersRouter;