const express = require('express')
const authRouter = express.Router();
const authControl = require('../controllers/user')

authRouter.get('/user', authControl.getUser)
authRouter.get('/users', authControl.getAllUsers)
authRouter.post('/user', authControl.createUser)
authRouter.delete('/user', authControl.deleteUser)

module.exports = authRouter


