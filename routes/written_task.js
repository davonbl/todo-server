const express = require('express')
const router = express.Router()
const authControl = require('../controllers/written_task')
const authRouter = require('./user')

authRouter.post('/tasks/:user_id', authControl.createTask)
authRouter.get('/tasks/:written_task_id', authControl.getTask)


module.exports = authRouter