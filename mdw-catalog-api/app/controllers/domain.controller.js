const Domain = require('../models/domain.model.js');
// Create and Save a new Domain
exports.create = (req, res, next) => {
    // Validate request
    if (!req.body) {
        return res.status(400).send({
            message: "Domain content can not be empty"
        });
    }    

    // Create a Domain
    const domain = new Domain({
        name: req.body.name,
        adminConsole: req.body.adminConsole,
        isActive: req.body.isActive || true
    });

    // Save Domain in db
    domain.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            console.log("Error: " + err.status + " | " + err)
            //Check validation errors
            if(err.name === 'ValidationError'){
                res.status(400).send({
                    message: "Validation Error. Please check your request >>>" + err.message
                })
            }else 
            res.status(500).send({
                message: err.message || "Some error ocurred while creating Domain."
            });
        });
};

// Retrieve and return all domains from db
exports.findAll = (req, res) => {
    Domain.find()
        .then(domains => {
            res.send(domains);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error ocurred while retrieving domains."
            })
        })
};

// Find a single Domain with domainId
exports.findOne = (req, res) => {
    Domain.findOne({ domainName: req.params.domainId })
        .then(domain => {
            if (!domain) {
                return res.status(404).send({
                    message: "Domain not found with id " + req.params.domainId
                });
            }
            res.send(domain);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(400).send({
                    message: "Domain not found with id " + req.params.domainName
                });
            }
            return res.status(500).send({
                message: "Error retrieving Domain with id " + req.params.domainName
            });
        });
};

// Update a Domain with provided domainId
exports.update = (req, res) => {
    // Validate request 
    if (!req.body) {
        return res.status(400).send({
            message: "Domain cannot be empty"
        })
    }

    //Find Domain and update it
    Domain.findByIdAndUpdate(req.params.domainId, 
        { $set: req.body },
        { new: true })
        .then(domain => {
            if (!domain) {
                return res.status(404).send({
                    message: "Domain not found with id " + req.params.domainId
                });
            }
            res.send(domain);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Domain not found with id " + req.params.domainId
                });
            }
            return res.status(500).send({
                message: "Error updating Domain with id " + req.params.domainId
            });
        });
};

// Delete a Domain with provided domainId
exports.delete = (req, res) => {
    Domain.findByIdAndRemove(req.params.domainId)
        .then(domain => {
            if (!domain) {
                return err.status(404).send({
                    message: "Domain not found with id " + req.params.domainId
                })
            }
            res.send({ message: "Domain deleted successfully!" })
        }).catch(err => {
            if (err.kind('ObjectId') || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Domain not found with id " + req.params.domainId
                })
            }
            return res.status(500).send({
                message: "Could not delete domain with id " + req.params.domainId
            });
        });

};

