const express = require('express');
const volunteerCtrl = require('../controllers/volunteerCtrl');
const router = express.Router();

router.route('/volunteer')
    .get(volunteerCtrl.volunteer_form)
    .post(volunteerCtrl.volunteer_form_post)

module.exports = router;