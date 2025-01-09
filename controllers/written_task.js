const express = require('express')
const app = express()
const {Written_task, User} = require('../models')
const { where } = require('sequelize')


const createTask = async(req, res) => {
    const {user_id} = req.params
    const {title, description, status} = req.body
    
    try {
        const user = await User.findOne({
            where:{
                user_id : user_id
            }
        });
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
                }
            })
            if(getATask){
                return res.status(200).json(getATask)   
            }
            return res.status(404).json({message:"no written task found to get"});
        }
        return res.status(404).json({message:"no user found or user not permited"})
        
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }

}

const updateTask = async(req, res) => {
    const { written_task_id } = req.params

    const {
        title,
        description,
        status,
        user_id
    } = req.body

    try {
        const getUser = await User.findOne({
            where: {
                user_id: user_id
            }
        })
        if(getUser){
            const currentWrittenTask = await Written_task.findOne({
                where: {
                    written_task_id : written_task_id
                }
            })
            if(currentWrittenTask){
                const update_written_task = await Written_task.update({
                    title,
                    description,
                    status,
                },
                {
                    where:{
                        written_task_id 
                    }
                }
                )
                console.log('here is the updated written task: ', update_written_task)
                return res.status(200).json(update_written_task) 
            }
            return res.status(404).json({message:"no written task found to update"});
        }
        return res.status(404).json({message:"no user found or user not permited"});
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: error.message})
    }

}

const deleteTask = async(req, res) => {
    const { written_task_id } = req.params
    const { user_id } = req.body
    try {
        const getUser = await User.findOne({
            where: {
                user_id: user_id
            }
        })
        console.log(user_id)
        if(getUser){
            const delete_written_task = await Written_task.findOne({
                where: {
                    written_task_id : written_task_id
                }
            })

            if(delete_written_task){
                console.log('here is the removed written task: ', delete_written_task)
                await delete_written_task.destroy()
                return res.status(200).json(delete_written_task)   
            }
            return res.status(404).json({message:"no written task found to delete"});
        
        }
        return res.status(404).json({message:"no user found or user not permited"});
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: error.message})
    }
}

module.exports = {
    createTask,
    getTask,
    updateTask,
    deleteTask

}