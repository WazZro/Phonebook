const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const phoneSchema = new Schema({
        title: {
            type: String,
            required: true
        },
        number: {
            type: String,
            required: true
        },
        additionalInfo: String
    },
    {
        versionKey: false
    });

const Phone = mongoose.model('Phone', phoneSchema);
module.exports = Phone;