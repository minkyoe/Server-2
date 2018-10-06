/*
 Default module
*/
const express = require('express');
const router = express.Router();

router.use('/new', require('../plan/new'));
router.use('/now', require('../plan/now'));
router.use('/past', require('../plan/past'));

module.exports = router;
