module.exports = app => {
    const domains = require('../controllers/domain.controller.js');


    // create a new Domain
    app.post('/domains', domains.create);
    
    // Retrieve all Domains
    app.get('/domains', domains.findAll);

    // Retrieve a Domain with domainId
    app.get('/domains/:name', domains.findOne);

    // Update a Domain with domainId
    app.put('/domains/:domainId', domains.update);

    // Delete a Domain with domainId
    app.delete('/domains/:domainId', domains.delete);

}