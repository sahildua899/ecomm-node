const express = require('express');
const {httpFindAllUsers, httpAddNewUser, httpFindUser, httpResetPassword, httpDeleteUser} = require('./users.controller')

const usersRouter = express.Router();

usersRouter.get('/', httpFindAllUsers);
usersRouter.post('/', httpAddNewUser);
usersRouter.post('/login', httpFindUser);
usersRouter.put('/reset', httpResetPassword);
usersRouter.delete('/delete', httpDeleteUser)


module.exports = usersRouter;