const express = require('express')
const router = express.Router()
const Product = require('../models/products');

router.get('/', async (req, res)=>{
    const products = await Product.find()
    res.send(products)
})

router.post('/', async (req, res)=>{
    const product = new Product(req.body)
    await product.save()
    res.send(product)
    // res.send('respuesta post router productos')
})

router.post('/edit-value', async (req, res) => {
    let product = await Product.findById(req.body._id)
    product.value =req.body.value
    await product.save()
    res.status(200).json({product})
})

router.get('/:id', async (req,res) =>{
    const product = await Product.findById(req.params.id)
    res.send(product)
})

// delete a product by id
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    let product = await Product.deleteOne( { _id: id } )
    res.status(200).json({product})
})

router.post('/add', async (req, res)=>{
    const product = new Product(req.body)
    await product.save()
    res.send(product)
    // res.send('respuesta post router productos')
})


module.exports = router