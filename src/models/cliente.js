//create a schema clients//
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Client =  new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type:Varchar, required: true },
    city: { type: String },
});

model.exports = mongoose.model('Client', ClientSchema);