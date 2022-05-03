const express = require('express');
const volunteerCtrl = require('../controllers/volunteerCtrl');
const router = express.Router();

// if I'm only serving up the page to the user - and they won't be routing elsehwere from this page, do I need this volunteerRoutes file or do I link from the indexRoutes?
router.route('/volunteer')
    .get(volunteerCtrl.volunteer_form)
    .post(volunteerCtrl.volunteer_form_post)

module.exports = router;