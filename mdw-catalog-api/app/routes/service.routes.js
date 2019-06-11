const router = require('express').Router();
    const services = require('../controllers/service.controller')

    // Create new Service
    router.post('/', services.create);

    // Retrieve all Services
    router.get('/', services.findAll);

    // Retrieve a Service with serviceId
    router.get('/:serviceId', services.findOne);

    // Update a Service with serviceId
    router.patch('/:serviceId', services.update);

    // Delete a Service with serviceId
    //app.delete('/services/:serviceId', services.delete);

module.exports = router;