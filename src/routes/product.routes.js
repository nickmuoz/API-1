const express = require('express')
const product = require('../models/product')
const router = express.Router()
const Product = require('../models/product')

router.get('/', (req, res)=>{
    const products = await Product.find()
    res.send(products)
})

router.get('/:id'), async (req,res) =>{
    const product = await Product.findById(req.params.id)
    res.send(product)
}
router.post('/add', async (req, res)=>{
    const product = new Product(req.body)
    await product.save()
    res.send(product)
    // res.send('respuesta post router productos')
})
// router.post('/', async (req, res)=>{
//     const product = new Product(req.body)
//     await product.save()
//     res.send(product)
//     // res.send('respuesta post router productos')
// })
router.post('/edit-value', async (req, res) => {
    let product = await Product.findById(req.body.product_id)
    product.value =req.body.value
    await product.save()
    res.status(200).json({product})


})
module.exports= router