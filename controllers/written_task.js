const express = require('express')
const app = express()
const {Written_task, User} = require('../models')


const createTask = async(req, res) => {
    const {user_id} = req.params
    const {title, description, status} = req.body
    try {
        const user = await User.findByPk(user_id);
        if(user){
            console.log('here is the user: ', user)
            const addTask = await Written_task.create({
                title,
                description,
                status,
                user_id
            })
            return res.status(200).json(addTask)

        }
        return res.status(404).json({message:"no user found or user not permited"})
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

const getTask = async(req, res) => {
    const {written_task_id} = req.params
    const {user_id} = req.body

    try {
        const user = await User.findOne({
            where: {
                user_id
            }
        });
        if(user){
            const getATask = await Written_task.findOne({
                where: {
                    written_task_id : written_task_id
                },
                include: {
                    model: User,
                    as: 'user'
                    // user_id
                }
            })
            return res.status(200).json(getATask)
        }
        return res.status(404).json('the user does not exist')
        
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }

}

const updateTask = async(req, res) => {

}

const deleteTask = async(req, res) => {

}

module.exports = {
    createTask,
    getTask
}