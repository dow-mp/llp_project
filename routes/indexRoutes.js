const express = require('express');

const siteRoutes = require('./siteRoutes');
const searchRoutes = require('./searchRoutes');
const helpRoutes = require('./helpRoutes');
const adminRoutes = require('./adminRoutes');
const volunteerRoutes = require('./volunteerRoutes');

const router = express.Router();

// includes routes for the index page, about, search, and success
router.use('/', siteRoutes);

// making this its own route for now - worried this will become bigger with the addition of the API map
router.use('/search', searchRoutes);

// includes routes for admin controls (Update and Delete use submitted form data for both the volunteer and help forms)
router.use('/admin', adminRoutes);

// includes routes to controllers for users to create data using the form and read the form iteself (CR)
router.use('/volunteer', volunteerRoutes);

// includes routes to controllers for users to create data using the form and read the form itself (CR)
router.use('/help', helpRoutes);


module.exports = router;

