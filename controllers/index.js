const express = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

express.use('/', homeRoutes);
express.use('/api', apiRoutes);

module.exports = express;
