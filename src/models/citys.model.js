const mongoose = require("mongoose");

const citiesSchema = new mongoose.Schema({

    cityName: { type: String, required: true },
    district: { type: String, required: true },
    population: { type: Number, required: true },
    cityType: { type: String, required: true },
    polling_id: [{ type: mongoose.Schema.Types.ObjectId, ref: "polling", required: true }],

},
    {
        varsionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("city", citiesSchema)