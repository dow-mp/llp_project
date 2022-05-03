const express = require('express');
const siteCtrl = require('../controllers/siteCtrl');
const router = express.Router();

router.route('/')
    .get(siteCtrl.index)

router.route('/about')
    .get(siteCtrl.about)

router.route('/success')
    .get(siteCtrl.success)

module.exports = router;