const express = require('express');
const volunteerCtrl = require('../controllers/volunteerCtrl');
const router = express.Router();

router.route('/')
    .get(volunteerCtrl.volunteer_form)
    .post(volunteerCtrl.createVolunteer)

router.route('/:_id')
    .get(volunteerCtrl.volunteer_detail)
    .put(volunteerCtrl.volunteer_update_put)
    .delete(volunteerCtrl.volunteer_delete)

module.exports = router;
