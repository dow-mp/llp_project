const siteData = require('../data/siteData');
const Park = require('../models/parkModel');
const Volunteer = require('../models/volunteerModel');

module.exports = {
    admin: (reg, res) => {
        res.render('pages/admin', {
            copyrightYear: siteData.year
        });
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
        const {_id} = req.params;
        Park.find({_id: _id}, (error, foundPark) => {
            if(error) {
                return error;
            } else {
                res.render('pages/parkUpdate', {
                    copyrightYear: siteData.year,
                    foundPark: foundPark
                });
            }
        });
    },

    volunteer_all: (reg, res) => {
        Volunteer.find({}, (error, allVolunteers) => {
            if(error) {
                return error;
            } else {
                res.render('pages/volunteerReview', {
                    copyrightYear: siteData.year,
                    allVolunteers: allVolunteers
                });
            }
        })
    },

    volunteer_update_get: (req, res) => {
        const {_id} = req.params;
        Volunteer.find({_id: _id}, (error, foundVolunteer) => {
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
}