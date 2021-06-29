const express = require('express');
const router = express.Router();

const sauceCtrl = require('../controlleurs/sauce');

router.post('/', sauceCtrl.createSauce);
router.put('/:id', sauceCtrl.modifySauce);
router.delete('/:id', sauceCtrl.deleteSauce);
router.get('/:id', sauceCtrl.getOneSauce);
router.get('/', sauceCtrl.getAllSauce);

module.exports = router;