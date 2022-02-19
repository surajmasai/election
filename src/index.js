const express = require('express');


const cityController = require('./controllers/citys.controller');

const pollingController = require('./controllers/polling.controller');


const app = express();

app.use(express.json());

app.use("/cityp", cityController);

app.use("/polling", pollingController)

module.exports = app;