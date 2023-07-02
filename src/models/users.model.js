const Users = require('./users.mongo');
const bcrypt = require('bcryptjs');

// Finding One User with Email
async function findingUser(loginData){
    const dbuser = await Users.findOne({email:loginData.email});
    return dbuser
}

// Getting All Users
async function getAllUsers(){
    return await Users.find({})
}

// Adding New User
async function addNewUser(userData){
    const newUser = await new Users(JSON.parse(userData)).save();
    return newUser
}

// Finding User
async function findLoginUser(loginData) {
   const foundUser = await findingUser(loginData)
   if(!foundUser) return false
    const isMatch = await bcrypt.compare(loginData.password, foundUser.password)
    return isMatch
}

// Updating User Pass
async function updateUserPass(newPassData) {
    const useremail = newPassData.email;
    let userpassword = newPassData.password;
    userpassword = await bcrypt.hash(userpassword, 10);
   const updatedPassword = await Users.updateOne({email:useremail}, {password:userpassword});
   return updatedPassword;
}

// Deleting User
async function deleteUserData(userDatatoDelete) {
    const deletedData = await Users.deleteOne({email:userDatatoDelete.email});
    return deletedData
}

module.exports = {
    getAllUsers,
    addNewUser,
    findLoginUser,
    updateUserPass,
    deleteUserData
}