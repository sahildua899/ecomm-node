const Users = require('./users.mongo');
const bcrypt = require('bcryptjs');

async function findingUser(loginData){
    const dbuser = await Users.findOne({email:loginData.email});
    console.log(dbuser)
    return dbuser
}

async function getAllUsers(){
    return await Users.find({})
}

async function addNewUser(userData){
    const newUser = await new Users(JSON.parse(userData)).save();
    return newUser
}

async function findLoginUser(loginData) {
   const foundUser = await findingUser(loginData)
    const isMatch = await bcrypt.compare(loginData.password, foundUser.password)
    return isMatch
}

async function updateUserPass(newPassData) {
    const useremail = newPassData.email;
    let userpassword = newPassData.password;
    userpassword = await bcrypt.hash(userpassword, 10);
   const updatedPassword = await Users.updateOne({email:useremail}, {password:userpassword});
   return updatedPassword;
}

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