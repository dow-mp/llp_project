const express = require('express');
const parkCtrl = require('../controllers/parkCtrl');
const router = express.Router();

router.route('/')
    .get(parkCtrl.park_form)

router.route('/add-park')
    .post(parkCtrl.createPark)


module.exports = router;