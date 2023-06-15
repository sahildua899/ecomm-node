const {getAllUsers, addNewUser, findLoginUser, updateUserPass, deleteUserData} = require('../../models/users.model');

// Find All Users
async function httpFindAllUsers(req,res){
    const users = await getAllUsers();
    return res.status(200).send('Fetching Users')
}

// Add New User
async function httpAddNewUser(req,res){
    const userData = req.body;
    if(!userData){
        res.status(400).json({
            error:'No User Data'
        })
    }
    if(!userData.confirmpassword || userData.confirmpassword !== userData.password) {
        res.status(400).json({
            error:'Please Enter Password'
        })
    }
    await addNewUser(JSON.stringify(userData));
    return res.status(201).json(userData)
}

// Find A User / Login User
async function httpFindUser(req,res) {
    const loginData = req.body;
    if(!loginData){
        res.status(404).json({
            error:'Enter Email and Password'
        })
    }
    const userResponse = await findLoginUser(loginData);
    if(userResponse === true){
        res.status(200).send("login Valid")
    }else {
        res.status(404).send('Please Enter Valid Login Details')
    }
    
    // return res.status(200).json(loginData);
}

// Update User Password/ Reset Password
async function httpResetPassword(req,res){
    const newData = req.body
    const updatedResponse = await updateUserPass(newData);
    if(updatedResponse.modifiedCount === 1) {
        res.status(200).json({
            message:"Password updated Successfully"
        })
    } else {
        res.status(400).json({
            message:"Something Went Wrong"
        })
    }
}

// Delete User from Database
async function httpDeleteUser(req,res) {
    const userDatatoDelete = req.body;
   const deletedUser = await deleteUserData(userDatatoDelete);
   if(deletedUser.deletedCount === 0) {
    res.status(404).json({
        message:'Something Problem in deletion of Data'
    })
   }
   res.status(200).json({
    message:"User deletion Successfull"
   })
}


module.exports = {
    httpFindAllUsers,
    httpAddNewUser,
    httpFindUser,
    httpResetPassword,
    httpDeleteUser
}