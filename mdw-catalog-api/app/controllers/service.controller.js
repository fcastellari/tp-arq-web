const Service = require('../models/service.model');
// Create and Save a new Service
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        return res.status(400).send({
            message: "Service content can not be empty"
        });
    }
    // Create a Service
    const service = new Service({
        serviceCode: req.body.serviceCode,
        project: req.body.project,
        type: req.body.type,
        serviceName: req.body.serviceName,
        domain: req.body.domain,
        description: req.body.description,
        country: req.body.country,
        businessUnit: req.body.businessUnit,
        sourceSystem: req.body.sourceSystem,
        sourceObjectType: req.body.sourceObjectType,
        targetSystem: req.body.targetSystem,
        targetObjectType: req.body.targetObjectType,
        schedule: req.body.schedule,
        owner: req.body.owner,
        comments: req.body.comments,
        isActive: req.body.isActive || true
    });
    // Save Service in db
    service.save()
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
                    message: err.message || "Some error ocurred while creating Service."
                });
        });
};

//Retrieve and return all services from db
exports.findAll = (req, res) => {
    Service
        .find()
        .populate({
            path: 'domain',
            select: '-_id name adminConsole isActive'
        })
        .populate({
            path: 'owner',
            select: '-_id username name email phoneNumber isActive'
        })
        .then(services => {
            res.send(services)
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error ocurred while retrieving services"
            })
        });
}

// Find a single Service with Service _id
exports.findOne = (req, res) => {
    Service.findById(req.params.serviceId)
        .populate({
            path: 'domain',
            select: '-_id name adminConsole isActive'
        })
        .populate({
            path: 'owner',
            select: '-_id username name email phoneNumber isActive'
        })
        .then(service => {
            if (!service) {
                return res.status(404).send({
                    message: "Service not found with id " + req.params.serviceId
                });
            }
            res.send(service);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(400).send({
                    message: "Service not found with id " + req.params.serviceId
                });
            }
            return res.status(500).send({
                message: "Error retrieving Service with id " + req.params.serviceId
            });
        });
};

// Update a Service
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Service cannot be empty"
        })
    }
    Service.findByIdAndUpdate(req.params.serviceId,
        { $set: req.body },
        { new: true })
        .populate({
            path: 'domain',
            select: '-_id name adminConsole isActive'
        })
        .populate({
            path: 'owner',
            select: '-_id username name email phoneNumber isActive'
        })
        .then(service => {
            if (!service) {
                return res.status(404).send({
                    message: "Service not found with id " + req.params.serviceId
                });
            }
            res.send(service);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Service not found with id " + req.params.serviceId
                });
            }
            return res.status(500).send({
                message: "Error updating Service with id " + req.params.serviceId
            });
        });


};