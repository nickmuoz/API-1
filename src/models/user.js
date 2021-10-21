const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const User = Schema({
    name: String,
    email: {
        type:String,
        require:true,
        unique:true
    },
    password: String 
})

module.exports = mongoose.model('user',User);