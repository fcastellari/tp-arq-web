const router = require('express').Router();
const domains = require('../controllers/domain.controller.js');


// create a new Domain
router.post('/', domains.create);

// Retrieve all Domains
router.get('/', domains.findAll);

// Retrieve a Domain with domainId
router.get('/:name', domains.findOne);

// Update a Domain with domainId
router.patch('/:domainId', domains.update);

// Delete a Domain with domainId
router.delete('/:domainId', domains.delete);

module.exports = router;