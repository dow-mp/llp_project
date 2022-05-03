const express = require('express');
const adminCtrl = require('../controllers/adminCtrl');
const router = express.Router();

router.route('/help')
    .get(adminCtrl.help_all)
    .put(adminCtrl.help_update_put)
    .delete(adminCtrl.help_delete)

router.route('/volunteer')
    .get(adminCtrl.volunteer_all)
    .put(adminCtrl.volunteer_update_put)
    .delete(adminCtrl.volunteer_delete)

module.exports = router;