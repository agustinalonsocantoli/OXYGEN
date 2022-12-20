'use strict'

let mongoose = require('mongoose');
let schema = mongoose.Schema;

let ConversionSchema = schema({
    input_unit: Number,
    input_type: String,
    output_unit: Number,
    output_type: String
});

module.exports = mongoose.model('Conversiones' ,ConversionSchema);
