const express = require('express')
const router = express.Router()
const Service = require('../models/services')

router.get('/', async (req, res) => {
    const services = await Service.find()
    res.send(services)
});

router.post('/', async (req, res) => {
    const service = new Service(req.body)
    await service.save()
    res.send(service)
});


module.exports = router