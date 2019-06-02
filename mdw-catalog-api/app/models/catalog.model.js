const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Domain = require('../models/domain.model');
const Owner = require('../models/owner.model');

const Countries = Object.freeze({
    ARGENTINA: 'AR',
    CHILE: 'CL',
    REGIONAL: 'RE',
    PERU: 'PE'
});

const Types = Object.freeze({
    OSB: 'OSB',
    ODI: 'ODI',
    BIZTALK: 'BIZTALK'
});

const BusinessUnit = Object.freeze({
    MEJORAMIENTODEHOGAR: 'MDH',
    TIENDASXDEPARTAMENTO: 'TXD',
    REGIONAL: 'REG',
    BACKOFFICE: 'BO',
    SUPERMERCADOS: 'SM'
});


const ServiceSchema = mongoose.Schema({
    serviceId: {type: String, required: true, unique: true, uppercase: true},
    project: {type: String, required:true},
    type: {type: String, required:true, enum: Object.values(Types)},
    serviceName: {type: String, required: true},
    domain: {type: Schema.Types.ObjectId, ref: 'Domain'},
    description: {type: String, required: true},
    country: {type: String, required: true, enum: Object.values(Countries)},
    businessUnit: {type: String, required: true, enum: Object.values(BusinessUnit)},
    sourceSystem: {type: String, required: true},
    sourceObjectType: {type: String, required: true},
    targetSystem: {type: String, required: true},
    targetObjectType: {type: String, required: true},
    schedule: String,
    owner: {type: Schema.Types.ObjectId, ref: 'Owner'},
    comments: String,
    isActive: Boolean || true
}, {
    timestamps: true
});

module.exports = mongoose.model('Service', ServiceSchema);