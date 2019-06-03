module.exports = app => {

    const owners = require('../controllers/owner.controller')


    //Create new Owner
    app.post('/owners', owners.create);

    //Retrieve all Owners
    app.get('/owners', owners.findAll);

    //Retrieve a Owner with ownerId
    app.get('/owners/:ownerId', owners.findOne);

    //Update a Owner with ownerId
    app.patch('/owners/:ownerId', owners.update);

    //Delete a Owner with ownerId
    app.delete('/owners/:ownerId', owners.delete);
}