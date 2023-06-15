const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    id:{
        type:Number
    },
    name:{
        type:String,
       
    },
    preview:{
        type:String
    },
    photos:{
        type:Array
    },
    description:{
        type:String
    },
    isAccessory : {
        type:String
    },
    brand:{
        type:String
    },
    price:{
        type:Number
    }
})



const Product = new mongoose.model("Product", productsSchema);

module.exports = Product