// Add code here
const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
    address: String,
    City: String,
    province: String,
    country: String,
    postalCode: String
});

module.exports = AddressSchema;