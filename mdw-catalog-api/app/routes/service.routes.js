module.exports = app => {

    const services = require('../controllers/service.controller')

    // Create new Service
    app.post('/services', services.create);

    // Retrieve all Services
    app.get('/services', services.findAll);

    // Retrieve a Service with serviceId
    app.get('/services/:serviceId', services.findOne);

    // Update a Service with serviceId
    app.patch('/services/:serviceId', services.update);

    // Delete a Owner with serviceId
    //app.delete('/services/:serviceId', services.delete);

}