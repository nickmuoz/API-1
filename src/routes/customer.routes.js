const express = require('express')
const router = express.Router()
const Customer = require('../models/customers')

router.get('/', async (req, res) => {
    const customers = await Customer.find()
    res.send(customers)
});

router.post('/', async (req, res) => {
    const customer = new Customer(req.body)
    await customer.save()
    res.send(customer)
});


module.exports = router