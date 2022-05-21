const express = require('express');
const searchCtrl = require('../controllers/searchCtrl');
const router = express.Router();

router.route('/')
    .get(searchCtrl.search_form)
    .post(searchCtrl.locate_parks)


module.exports = router;