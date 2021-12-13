//create a schema customers//
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema =  new Schema({
    name: String,
    password: String,
    email: String, 
    phone: Number,
    address: String,
});

module.exports = mongoose.model('customer', customerSchema);