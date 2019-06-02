const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const DomainSchema = mongoose.Schema({
    domainName: {type: String, required: true, unique: true},
    adminConsole: {type: String, required: true, unique: true},
    isActive: Boolean || true
}, {
    timestamps: true
});

Object.assign(DomainSchema.statics, {
    Countries, Types
});

DomainSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Domain', DomainSchema);