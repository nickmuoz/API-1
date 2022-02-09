const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    //atributos---->map con db
    category: String,
    name: String,
    brand: String,
    reference: String,
    value:Number,
    description:String,
    avaliability:Boolean,
    serialNumber:Number,
    quantity:Number,
});

module.exports = mongoose.model('products',productSchema);