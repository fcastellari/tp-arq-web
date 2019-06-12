const Owner = require('../models/owner.model');
const { check, validationResult } = require('express-validator/check');

// Create and Save a new Owner
exports.createOwner = (req, res, next) => {

    console.log("Req:" + req);
    if (!req.body) {
        return res.status(400).send({
            message: "Body content can't be empty"
        });
    }
    //Validation result
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    };

    // Create a Owner
    const owner = new Owner({
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        isActive: req.body.isActive || true
    });

    // Save Owner in db
    owner.save()
        .then(data => {
            res.status(201).send(data);
        }).catch(err => {
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

// Retrieve and return all owners from db
exports.findAll = (req, res, next) => {
    Owner.find()
        .then(owners => {
            res.send(owners);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error ocurred while retrieving owners."
            })
        })
};

// Find a single Owner with Owner id
exports.findOne = (req, res, next) => {
    Owner.findById(req.params.ownerId)
        .then(owner => {
            if (!owner) {
                return res.status(404).send({
                    message: "Owner not found with ID " + req.params.ownerId
                });
            }
            res.send(owner);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(400).send({
                    message: "Owner not found with ID " + req.params.ownerId
                });
            }
            return res.status(500).send({
                message: "Error retrieving Owner with ID " + req.params.ownerId
            });
        });
};

// 

// Update a Owner with provided username
exports.update = (req, res, next) => {
    // Validate request 
    if (!req.body) {
        return res.status(400).send({
            message: "Owner cannot be empty"
        })
    }

    //Find Owner and update it
    Owner.findByIdAndUpdate(req.params.ownerId,
        { $set: req.body },
        { new: true })
        .then(owner => {
            if (!owner) {
                return res.status(404).send({
                    message: "Owner not found with ID " + req.params.ownerId
                });
            }
            res.send(owner);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Owner not found with ID " + req.params.ownerId
                });
            }
            return res.status(500).send({
                message: "Error updating Owner with id " + req.params.ownerId
            });
        });
};

// Delete a Owner with provided domainId
exports.delete = (req, res, next) => {
    Owner.findByIdAndRemove(req.params.ownerId)
        .then(owner => {
            if (!owner) {
                return err.status(404).send({
                    message: "Owner not found with id " + req.params.ownerId
                })
            }
            res.send({ message: "Owner deleted successfully!" })
        }).catch(err => {
            if (err.kind('ObjectId') || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Owner not found with id " + req.params.ownerId
                })
            }
            return res.status(500).send({
                message: "Could not delete owner with id " + req.params.ownerId
            });
        });
};


const validationHandler = next => result => {
    if (result.isEmpty()) return
    if (!next)
        throw new Error(
            result.array().map(i => `'${i.param}' has ${i.msg}`).join(' ')
        )
    else
        return next(
            new Error(
                result.array().map(i => `'${i.param}' has ${i.msg}`).join('')
            )
        )
}