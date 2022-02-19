const express = require('express');

const { mongoose } = require('mongoose');
const citysModel = require('../models/citys.model');

const Polling = require('../models/polling.model');


const router = express.Router();


router.post("/", async (req, res) => {
    try {
        const poll = await Polling.create({
            name: req.body.name,
            address: req.body.address,
            pincode: req.body.pincode,
        })

        return res.status(201).send({ poll })
    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }
});


router.get("/", async (req, res) => {

    try {

        // console.log(poll)

        // const pollsInCity = await citysModel.find();


        // const polls = await Polling.find().lean().exec();


        // pollsInCity && pollsInCity.map(((city, index) => {

        //     const pollArr = [];

        //     for (let i = 0; i < Object.keys(polls); i++) {
        //         if (city._id.toString() === poll.city_id.toString()) {
        //             pollArr.push(polls[i]);
        //         }
        //         pollsInCity[index].allPolls = (pollArr);
        //     }

        //     console.log(pollsInCity[index])



        // }))

        const pollsInCity = await Polling.find().lean().exec()


        return res.status(200).send({ pollsInCity })

    } catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }

});



module.exports = router; 