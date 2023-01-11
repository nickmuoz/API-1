const jwt = require('jsonwebtoken'); 
const bcrypt = require ('bcrypt'); 
const User = require('../models/user');

const authService = {
    login: async function(data){
        try {
            const {email,password} = data;
            let userExists = await User.findOne({email: email},'name email password address type phone sex').exec()
            if (await bcrypt.compare(password,userExists.password).then(res=>res)){
                const token = await this.signToken(userExists.id)
                userExists.password = ''
                const name = await userExists.name
                const id = await userExists._id
                const address = await userExists.address
                const type = await userExists.type
                const phone = await userExists.phone
                const sex = await userExists.sex 

                return {
                    code:200,
                    token: token,
                    email: email,
                    name: name,
                    id: id,
                    address: address,
                    type: type,
                    phone: phone,
                    sex : sex
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
                error:true,
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