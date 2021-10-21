const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    //atributos---->map con db
    name: String,
    value:Number,
    description:String,
    avaliability:Boolean,
    serialNumber:Number
});

module.exports = mongoose.model('products',productSchema);