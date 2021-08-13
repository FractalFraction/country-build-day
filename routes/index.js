const express = require('express');
const indexRouter = express.Router();

const countryHandler = require('./handlers/index/countryDisplay');
const indexHandler = require('./handlers/index/index');

indexRouter.get('/', [countryHandler,indexHandler]);

module.exports = indexRouter;