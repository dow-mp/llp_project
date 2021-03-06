const express = require('express');

const siteRoutes = require('./siteRoutes');
const parkRoutes = require('./parkRoutes');
const adminRoutes = require('./adminRoutes');
const volunteerRoutes = require('./volunteerRoutes');
const searchRoutes = require('./searchRoutes');

const router = express.Router();

// includes routes for the index page, about, search, and success
router.use('/', siteRoutes);

// includes routes for admin controls (Update and Delete use submitted form data for both the volunteer and help forms)
router.use('/admin', adminRoutes);

// includes routes to controllers for users to create data using the form and read the form iteself (CR)
router.use('/volunteer', volunteerRoutes);

// includes routes to controllers for users to create data using the form and read the form itself (CR)
router.use('/park', parkRoutes);

// search router
router.use('/search', searchRoutes);


module.exports = router;

