/*
 Default module
*/
const express = require('express');
const router = express.Router();

router.use('/check', require('../main/check'));

module.exports = router;