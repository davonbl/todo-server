const express = require('express')
const authRouter = express.Router();
const authControl = require('../controllers/user')

authRouter.get('/user', authControl.getUser)
authRouter.post('/user', authControl.createUser)

module.exports = authRouter


