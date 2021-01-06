const mongoose = require('mongoose');
const AddressSchema = require('./address-schema');

const CompanySchema = new mongoose.Schema({
  name: String,
  address: AddressSchema
});

module.exports = mongoose.model('Company', CompanySchema);