const mongooose = require('mongoose');
const bcrypt = require('bcryptjs');

// Defining Schema
const usersSchema = new mongooose.Schema({
    firstname: {
        type:String,
        required:true
    },
    lastname : {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender: {
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    customerType:{
        type:String,
        default:"Customer"
    },
    age: {
        type:Number,
        required:true,
    },
    password : {
        type:String,
        required:true
    },
    confirmpassword : {
        type:String,
        required:true
    }
})

usersSchema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10);
        this.confirmpassword = await bcrypt.hash(this.confirmpassword, 10);
        this.confirmpassword = undefined;
    }
    next()
})
    


const Users = new mongooose.model("User", usersSchema);

module.exports = Users;