//create a schema customers//
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema =  new Schema({
    name: String,
    password: String,
    adress: String,
    sex:String,
    email: {
        type:String,
        require:true,
    },
    birthday: Date,
    phone: Number,
});

module.exports = mongoose.model('customer', customerSchema);