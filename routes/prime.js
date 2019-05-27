const express = require('express');
const router = express.Router();

const primeController = require('../controllers/prime')

router.post('/median', primeController.getMedianFromPrimes);


module.exports = router;