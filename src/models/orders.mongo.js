const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    orderNumber:{
        type:Number,
        unique:true,
        default:100,
    },
    amount:{
        type:Number
    },
    email:{
        type:'String',
        required:true
    },
    products:[
        {
        brand:{
            type:String,
        },
        id:{
            type:Number,
        },
        isAccessory:{
            type:String,
        },
        name:{
            type:String
        },
        preview:{
            type:String
        },
        price:{
            type:Number
        },
        count:{
            type:Number
        }
        }
    ],
    billing:[{
                firstname:String,
                lastname:String,
                phone:Number,
                address:String,
                nearby:String,
                city:String,
                country:String,
                state:String,
                pincode:Number
    }]
})

const Order = new mongoose.model("Order", OrderSchema);

module.exports = Order