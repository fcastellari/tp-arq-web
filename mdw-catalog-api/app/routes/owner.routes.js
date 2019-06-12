const router = require('express').Router();
const owners = require('../controllers/owner.controller');
const v = require('../validations/owner.validations');

//Create new Owner
router.post('/', v.validateOwner('create'), owners.createOwner);
//Retrieve all Owners
router.get('/', owners.findAll);

//Retrieve a Owner with ownerId
router.get('/:ownerId', owners.findOne);

//Update a Owner with ownerId
router.patch('/:ownerId', owners.update);

//Delete a Owner with ownerId
router.delete('/:ownerId', owners.delete);

module.exports = router;