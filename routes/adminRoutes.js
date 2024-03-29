const express = require('express');
const adminCtrl = require('../controllers/adminCtrl');
const router = express.Router();

router.route('/')
    .get(adminCtrl.admin)

router.route('/parks')
    .get(adminCtrl.park_all)

router.route('/add-park')
    .get(adminCtrl.create_park)

router.route('/:_id/edit-park')
    .get(adminCtrl.park_update_get)

router.route('/volunteers')
    .get(adminCtrl.volunteer_all)

router.route('/add-volunteer')
    .get(adminCtrl.create_volunteer)

router.route('/:_id/edit-volunteer')
    .get(adminCtrl.volunteer_update_get)

module.exports = router;