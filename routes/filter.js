const express = require('express');
const filterRouter = express.Router();

const filterHandler = require('./handlers/filters/filterDisplay');
const indexHandler = require('./handlers/filters/index');

filterRouter.put('/byattribute', [filterHandler,indexHandler]);

module.exports = filterRouter;