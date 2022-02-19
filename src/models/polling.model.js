const mongoose = require('mongoose');


const pollingStation = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    pincode: { type: Number, required: true }
}, {
    versionKey: false,
    timestamps: true,
});

module.exports = mongoose.model("polling", pollingStation)