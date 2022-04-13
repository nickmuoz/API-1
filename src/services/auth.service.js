const jwt = require('jsonwebtoken'); 
const bcrypt = require ('bcrypt'); 
const User = require('../models/user');

const authService = {
    login: async function(data){
        try {
            const {email,password} = data;
            let userExists = await User.findOne({email: email},'name email password').exec()
            if (await bcrypt.compare(password,userExists.password).then(res=>res)){
                const token = await this.signToken(userExists.id)
                userExists.password = ''
                const name = await userExists.name
                return {
                    code:200,
                    token: token,
                    email: email,
                    name: name
                }
            }else{
                return {
                    code:400,
                    error:true,
                    msg:'user or password incorrect'
                }
            }
        }catch (error){
            return {
                code:400,
                erro:true,
                msg:'Data error'
            }
        }
    },
    register: async function(userData){
        try{
            let pass = await bcrypt.hash(userData.password,10).then(res=>res)
            userData.password = pass
            await userData.save()
            let token = await this.signToken(userData._id)
            return {
                userData,
                code:200,
                token
            }
        }catch(error){
            return{
            code:400,
            msg: 'Data error',
            error
        }
        }

    },

    signToken: async function(id){
     //esta clave debe ser segura        
        return jwt.sign({id}, 'mvpemq100v', {
            expiresIn:60 * 60 * 24
        })
    }
}

module.exports = authService