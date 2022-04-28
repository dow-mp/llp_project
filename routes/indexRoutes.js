const express = require('express');

const siteRoutes = require('./siteRoutes');
const infoRoutes = require('./infoRoutes');
const adminRoutes = require('./adminRoutes');
const submitRoutes = require('./submitRoutes');

const router = express.Router();

router.use('/', siteRoutes);

// want to use the same routes file to handle routing for all informational pages - about, search, success - is this possible?
router.use('/search', infoRoutes);
router.use('/success', infoRoutes);

router.use('/admin', adminRoutes);

// can I use the same routes file for submissions to the help and volunteer forms?
router.use('/volunteer', submitRoutes);
router.use('/help', submitRoutes);

module.exports = router;

