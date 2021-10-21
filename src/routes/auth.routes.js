const express = require('express');
const router = express.Router();
const authService = require('../services/auth.service')
const User = require('../models/user')



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
router.post('/register', async (req,res)=>{
    try{
        const user = new User(req.body)
        const userData = await authService.register(user)
        res.send(userData)
    }catch(error){
        res.send(error)
    }
});

module.exports = router