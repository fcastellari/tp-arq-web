const Catalog = require('../models/catalog');   

// Create and Save a new Service
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        return res.status(400).send({
            message: "Owner content can not be empty"
        });
    }
    // Create a Owner
    const owner = new Owner({
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber
    });

    // Save Owner in db
    owner.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            console.log("Error: " + err.status + " | " + err)
            //Check validation errors
            if (err.name === 'ValidationError') {
                res.status(400).send({
                    message: "Validation Error. Please check your request >>>" + err.message
                })
            } else
                res.status(500).send({
                    message: err.message || "Some error ocurred while creating Owner."
                });
        });
};