const mongoose = require('mongoose');

// const newOrderSchema = new mongoose.Schema({
//     amount:{
//         type:Number
//     },
//     orderNumber:{
//         type:Number,
//         unique:true
//     },
//     products:[{
//         brand:{
//             type:String
//         },
//         count:{
//             type:Number
//         },
//         id:{
//             type:Number
//         },
//         price:{
//             type:Number
//         },
//         size:{
//             type:Number
//         }
//     }]
// })

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
                type:String
            },
            count:{
                type:Number
            },
            id:{
                type:Number
            },
            price:{
                type:Number
            }
        }
    ],
    billingDetails:{
                firstname:String,
                lastname:String,
                company:String,
                country:String,
                houseAdd:String,
                apartment:String,
                city:String,
                state:String,
                zipcode:String,
                phone:String
    }
})

const Order = new mongoose.model("Order", OrderSchema);

module.exports = Order