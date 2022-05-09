const express = require('express');
const parkCtrl = require('../controllers/parkCtrl');
const router = express.Router();

router.route('/')
    .get(parkCtrl.park_form)
    .post(parkCtrl.createPark)

router.route('/:_id')
    .put(parkCtrl.park_update_put)
    .delete(parkCtrl.park_delete)


module.exports = router;