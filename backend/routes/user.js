const express = require('express');
const router = express.Router();
const userCtrl = require('../controlleurs/user');
const controlPassword = require('../middleware/controlPassword');

router.post('/signup', controlPassword, userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;