const express = require('express');
const router = express.Router();
const authService = require('../services/auth.service')
const User = require('../models/user')


//login
router.post('/login', async (req,res)=>{
    try{
        const {email, password} = req.body
        if(!email || !password){
            res.status(400).json('email ans password require')
        }
        let token = await authService.login(req.body)
        if(token){
            res.status(token.code).json(token)
        }
    }catch(error){
        res.send(error)
    }
});
//registro
router.post('/register', async (req,res)=>{
    try{
        const user = new User(req.body)
        const userData = await authService.register(user)
        res.send(userData)
    }catch(error){
        res.send(error)
    }
});
//get users
router.get('/users', async (req,res)=>{
    try{
        const users = await User.find()
        res.send(users)
    }catch(error){
        res.send(error)
    }
});

//delete user
router.delete('/:id', async (req,res)=>{
    try{
        const id = req.params.id 
        let user = await User.findByIdAndRemove({_id: id })
        res.status(200).json({user})
    }catch(error){
        res.send(error)
    }
});
//delete user by email
router.delete('/:email', async (req,res)=>{
    try{
        const email = req.params.email 
        let user = await User.findOneAndDelete({email: email })
        res.status(200).json({user})
    }catch(error){
        res.send(error)
    }
})

module.exports = router