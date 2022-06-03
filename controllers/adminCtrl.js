const siteData = require('../data/siteData');
const Park = require('../models/parkModel');
const Volunteer = require('../models/volunteerModel');

module.exports = {
    admin: (req, res) => {
        if (req.isAuthenticated()) {
            res.render('pages/admin', {
                copyrightYear: siteData.year
            });
        } else {
            res.render('pages/404', {
                copyrightYear: siteData.year
            });
        }
    },

    park_all: (req, res) => {
        Park.find({}, (error, allParks) => {
            if(error) {
                return error;
            } else {
                res.render('pages/parkReview', {
                    copyrightYear: siteData.year,
                    allParks: allParks
                });
            }
        });
    },

    park_update_get: (req, res) => {
        if(req.isAuthenticated()) {
            const {_id} = req.params;
            Park.findOne({_id: _id}, (error, foundPark) => {
                if(error) {
                    return error;
                } else {
                    res.render('pages/parkUpdate', {
                        copyrightYear: siteData.year,
                        foundPark: foundPark
                    });
                }
            });
        }
    },

    create_park: (req, res) => {
        res.render('pages/park', {
            copyrightYear: siteData.year
        });
    },

    volunteer_all: (req, res) => {
        if(req.isAuthenticated()) {
            Volunteer.find({}, (error, allVolunteers) => {
                if(error) {
                    return error;
                } else {
                    res.render('pages/volunteerReview', {
                        copyrightYear: siteData.year,
                        allVolunteers: allVolunteers
                    });
                }
            });
        }
    },

    volunteer_update_get: (req, res) => {
        if(req.isAuthenticated()) {
            const {_id} = req.params;
            Volunteer.findOne({_id: _id}, (error, foundVolunteer) => {
                if(error) {
                    return error;
                } else {
                    res.render('pages/volunteerUpdate', {
                        copyrightYear: siteData.year,
                        foundVolunteer: foundVolunteer
                    });
                }
            });
        }
    },

    create_volunteer: (req, res) => {
        res.render('pages/volunteer', {
            copyrightYear: siteData.year
        });
    },
}