const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');

var formDataParse = bodyParser.urlencoded();

const sauceCtrl = require('../controlleurs/sauce');

router.post('/', sauceCtrl.createSauce);
router.put('/:id', sauceCtrl.modifySauce);
router.delete('/:id', sauceCtrl.deleteSauce);
router.get('/:id', sauceCtrl.getOneSauce);
router.get('/', sauceCtrl.getAllSauce);

module.exports = router;