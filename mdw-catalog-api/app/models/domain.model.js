const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const DomainSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    adminConsole: {type: String, required: true, unique: true},
    isActive: {type: Boolean}
}, {
    timestamps: true
});

DomainSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Domain', DomainSchema);