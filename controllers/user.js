require('dotenv').config()
const {Sequelize, where} = require('sequelize')
const {
Written_task, User
}= require('../models')


const getUser= async(req, res) =>{
    const {user_id} = req.query
    try {
        const getUser = await User.findOne({
            where : {
                user_id : user_id
            },
            include: {
                model: Written_task,
                as: "written_task"
            }
        })
        if(getUser){
            return res.status(200).json(getUser)
        }else{
            return res.status(404).json('the user does not exist')
        }
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: error.message})
    }
}

const getAllUsers = async(req, res) => {
    try {
        const showAllUsers = await User.findAll()
        return res.status(200).json(showAllUsers)   
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: error.message})
    }
}

const createUser= async (req, res)=> {
    try {
        const createUser = await User.create()
        return res.status(200).json(createUser)
    } catch (error) {
        console.error(error)
        return res.status(500).json({message: error.message})
    }
}

const deleteUser= async (req, res)=> {
    const {user_id} = req.query
    try {
        const getUser = await User.findOne({
            where : {
                user_id : user_id
            },
            include: {
                model: Written_task,
                as: "written_task"
            }
        })
        if(getUser){
            console.log('here is the removed user: ', getUser)
            await deleted_comment.destroy()
            return res.status(200).json(deleted_comment) 
        }
        return res.status(404).json('the user does not exist')

    } catch (error) {
        console.error(error)
        return res.status(500).json({message: error.message})
    }
}


module.exports = {
    getUser,
    getAllUsers,
    createUser,
    deleteUser
}