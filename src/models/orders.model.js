const Order = require('./orders.mongo');


// get All Orders
async function getAllOrders(){
    return await Order.find({})
}

// Add New Order
async function addNewOrder(orderDetails){
    const ordersLength = await getAllOrders(); 
    orderDetails.orderNumber = 100 + ordersLength.length + 1;
    const addedOrder = await new Order(orderDetails).save();
    return addedOrder;
}

// Find One Order
async function findOrder(orderDetails){
    const oneOrder = await Order.findOne({orderNumber:orderDetails});
    return oneOrder;
}

// Find Orders by Email
async function findAllOrders(orderEmail){
    const orders = await Order.find({email:orderEmail});
    return orders
}

// Delete Order

async function deleteOrder(orderId){
    const deletedOrder = await Order.deleteOne({orderNumber:orderId})
    return deletedOrder;
}

module.exports = {
    getAllOrders,
    addNewOrder,
    findOrder,
    findAllOrders,
    deleteOrder
}

