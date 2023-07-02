const {getAllOrders, addNewOrder, findOrder, findAllOrders, deleteOrder} = require('../../models/orders.model');
const Order = require('../../models/orders.mongo');

async function httpGetAllOrders(req,res){
    const orders = await getAllOrders()
    if(!orders) {
        res.status(404).json({
            message:'NO Orders Found'
        })
    }
    res.status(200).json(orders)
}

async function httpAddNewOrder(req,res){
    const orderDetails = req.body;
    const order = await addNewOrder(orderDetails);
    if(!order) {
        res.status(404).json({
            message:'Order Not Done Correctly'
        })
    }
    res.status(201).json({
        message:'Order Placed Success'
    })
}

// Find Order By OrderNumber
async function httpFindOrder(req,res){
    const orderNumber = req.params.id;
    const order = await findOrder(orderNumber);
    if(!order){
       return res.status(400).json({
            message:`No Order Found With Order Number ${orderNumber}`
        })
    }
    return res.status(200).json(order);

}

// Find Order by Email Id

async function httpFindOrdersbyEmail(req,res) {
    const orderEmail = req.params.email;
    const foundOrders = await findAllOrders(orderEmail);
    if(!foundOrders) {
        res.status(404).json({
            message:`No Orders Found with ${orderEmail}`
        })
    }
    res.status(404).json(foundOrders)
}

// Delete Order

async function httpDeleteOrder(req,res) {
    const orderId = req.params.id;
    const deletedOrder = await deleteOrder(orderId);
    if(!deleteOrder) {
        res.status(404).json({
            messsage:`No Order found with ${orderId} to Delete`
        })
    }
    res.status(200).json('Order Cancelled')
}

module.exports = {
    httpGetAllOrders,
    httpAddNewOrder,
    httpFindOrder,
    httpFindOrdersbyEmail,
    httpDeleteOrder
}