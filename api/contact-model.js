const mongoose = require('mongoose');
const AddressSchema = require('./address-schema');

const ContactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  address: AddressSchema
});

module.exports = mongoose.model('Contact', ContactSchema);