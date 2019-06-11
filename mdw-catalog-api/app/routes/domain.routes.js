module.exports = app => {
    const domains = require('../controllers/domain.controller.js');


    // create a new Domain
    app.post('/', domains.create);
    
    // Retrieve all Domains
    app.get('/', domains.findAll);

    // Retrieve a Domain with domainId
    app.get('/:name', domains.findOne);

    // Update a Domain with domainId
    app.patch('/:domainId', domains.update);

    // Delete a Domain with domainId
    app.delete('/:domainId', domains.delete);

}