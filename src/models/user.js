const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const User = Schema({
    name: String,
    sex: String,
    address: String,
    phone: Number,
    email: {
        type:String,
        require:true,
        unique:true
    },
    type: String,
    password: String 
})

module.exports = mongoose.model('users',User);