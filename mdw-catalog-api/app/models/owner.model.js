const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const OwnerSchema = mongoose.Schema({
    username: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phoneNumber: {type: String, required: true, unique: true},
    isActive: {type: Boolean, default: true}
},
{
    timestamps: true
});

OwnerSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Owner', OwnerSchema);