const express = require('express');

const City = require('../models/citys.model');

const { Mongoose } = require('mongoose');

const router = express.Router();


router.post("/", async (req, res) => {
    try {
        const city = await City.create(req.body);
        return res.status(201).send({ city })
    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }
});

router.get("/", async (req, res) => {

    try {

        const page = +req.query.page || 1;
        const size = +req.query.size || 2;


        const offSet = (page - 1) * size

        const Population = req.query.population || 1


        const city = await City.find().skip(offSet).limit(size).sort({ population: Population }).populate("polling_id").lean().exec()
        // console.log(city)
        return res.status(200).send({ city })

    } catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }




});

router.get("/:id", async (req, res) => {

    try {

        const city = await City.findById(req.params.id).populate("polling_id").lean().exec()

        return res.status(200).json(city)
    } catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }
})

module.exports = router;







