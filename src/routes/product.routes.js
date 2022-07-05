const express = require('express')
const router = express.Router()
const Product = require('../models/products');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });


router.get('/', async (req, res)=>{
    const products = await Product.find()
    res.send(products)
})
//create a new product
router.post('/', async (req, res)=>{
    const product = new Product(req.body)
    await product.save()
    res.send(product)
    // res.send('respuesta post router productos')
})
//Edit product value
router.post('/edit-value', async (req, res) => {
    let product = await Product.findById(req.body.id)
    product.value =req.body.value
    await product.save()
    res.status(200).json({product})
})
//Edit description
router.post('/edit-description', async (req, res) => {
    let product = await Product.findById(req.body.id)
    product.description =req.body.description
    await product.save()
    res.status(200).json({product})
})
//Edit Name
router.post('/edit-name', async (req, res) => {
    let product = await Product.findById(req.body.id)
    product.name =req.body.name
    await product.save()
    res.status(200).json({product})
})
//get product by id
router.get('/id', async (req,res) =>{
    const product = await Product.findById(req.body.id)
    res.send(product)
})
//Get Product by id with path

// router.get('/id', async (req,res) =>{
//     const product = await Product.findById(req.params.id)
//     res.send(product)
// })
//Get product by category
router.get ('/category', async (req,res) =>{
    const product = await Product.find({category:req.body.category})
    res.send(product)
});
//Get product by Brand
router.get ('/brand', async (req,res) =>{
    const product = await Product.find({brand:req.body.brand})
    res.send(product)
});
// delete a product by id
router.delete('/:id', async (req, res) => {
    //const { id } = req.params;
    const id  = req.params.id;
    let product = await Product.findByIdAndRemove( { _id: id } )
    res.status(200).json({product})
})
// delete a product by reference
router.delete('/:description', async (req,res) =>{
    try{
    const description = req.body.description;
    let product = await Product.findByIdAndRemove({ description: description } )
    res.status(200).json({product})
    }catch(error){
        res.send(error)
    }
})
//add a product to cart
router.post('/add', async (req, res)=>{
    const product = new Product(req.body)
    await product.save()
    res.send(product)
    //res.send('Producto agregado al correctamente')
})



module.exports = router