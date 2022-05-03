const express = require('express');
const helpCtrl = require('../controllers/helpCtrl');
const router = express.Router();

router.route('/help')
    .get(helpCtrl.help_form)
    .post(helpCtrl.help_form_post)


module.exports = router;