'use strict'

let express = require('express');
let ConversionControler = require('../controllers/conversiones');

let router = express.Router();

router.post('/save-conversion', ConversionControler.saveConversion);
router.get('/conversiones', ConversionControler.getConversion);
router.delete('/conversion/:id', ConversionControler.deleteConversion);

module.exports = router;