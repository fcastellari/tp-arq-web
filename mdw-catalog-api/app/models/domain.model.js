const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Countries = Object.freeze({
    Argentina: 'AR',
    Chile: 'CL',
    Regional: 'RE',
    Peru: 'PE'
});

const Types = Object.freeze({
    OSB: 'OSB',
    ODI: 'ODI'
});

const DomainSchema = mongoose.Schema({
    domainName: {type: String, required: true, unique: true},
    country:  {type: String, required: true, enum: Object.values(Countries)},
    type: {type: String, required: true, enum: Object.values(Types)},
    adminConsole: {type: String, required: true, unique: true},
    status: Boolean || true
}, {
    timestamps: true
});

Object.assign(DomainSchema.statics, {
    Countries, Types
});

DomainSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Domain', DomainSchema);