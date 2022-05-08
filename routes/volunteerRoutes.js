const express = require('express');
const volunteerCtrl = require('../controllers/volunteerCtrl');
const router = express.Router();

router.route('/')
    .get(volunteerCtrl.volunteer_form)

router.route('/add-volunteer')
    .post(volunteerCtrl.createVolunteer)

module.exports = router;