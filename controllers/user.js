require('dotenv').config()
const {Sequelize, where} = require('sequelize')
const {
Written_task, User
}= require('../models')


async function getUser(req, res){
    const {user_id} = req.query
    try {
        const getUser = await User.findOne({
            where : {
                user_id : user_id
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

async function createUser (req, res) {
    try {
        debugger
        const createUser = await User.create()
        return res.status(200).json(createUser)
    } catch (error) {
        console.error(error)
        return res.status(500).json({message: error.message})
    }
}

module.exports = {
    getUser,
    createUser
}