//create a schema customers//
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema =  new Schema({
    technician: String,
    created: {type:Date},
    customer: String,
    phone: Number,
    address:String,
    service: String,
    email: {
        type:String,
        require:true,
    },
    birthday: Date,
    description: String,
});

module.exports = mongoose.model('service', serviceSchema);