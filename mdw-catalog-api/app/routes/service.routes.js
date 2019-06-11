module.exports = app => {

    const services = require('../controllers/service.controller')

    // Create new Service
    app.post('/', services.create);

    // Retrieve all Services
    app.get('/', services.findAll);

    // Retrieve a Service with serviceId
    app.get('/:serviceId', services.findOne);

    // Update a Service with serviceId
    app.patch('/:serviceId', services.update);

    // Delete a Service with serviceId
    //app.delete('/services/:serviceId', services.delete);

}