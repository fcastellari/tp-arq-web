
const router = require('express').Router();
const owners = require('../controllers/owner.controller');


//Create new Owner
router.post('/', owners.validateOwner('create'), owners.create);

//Retrieve all Owners
router.get('/', owners.findAll);

//Retrieve a Owner with ownerId
router.get('/:ownerId', owners.findOne);

//Update a Owner with ownerId
router.patch('/:ownerId', owners.update);

//Delete a Owner with ownerId
router.delete('/:ownerId', owners.delete);

module.exports = router;