const express = require('express')
const router = express.Router()
const authControl = require('../controllers/written_task')
const authRouter = require('./user')

authRouter.post('/tasks/:user_id', authControl.createTask)
authRouter.get('/tasks/:written_task_id', authControl.getTask)
authRouter.put('/tasks/:written_task_id', authControl.updateTask)
authRouter.delete('/tasks/:written_task_id', authControl.deleteTask)

module.exports = authRouter