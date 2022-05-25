const express = require('express');
const siteCtrl = require('../controllers/siteCtrl');
const router = express.Router();

router.route('/')
    .get(siteCtrl.index)

router.route('/about')
    .get(siteCtrl.about)

router.route('/success')
    .get(siteCtrl.success)

router.route('/thanks')
    .get(siteCtrl.thanks)

router.route('/login')
    .get(siteCtrl.login)

// making this its own route for now - worried this will become bigger with the addition of the API map - NO, I don't think this needs its own router/controller files
// router.route('/search')
//     .get(siteCtrl.search)

module.exports = router;