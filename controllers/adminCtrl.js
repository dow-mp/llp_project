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

    // this may belong in the park controller file
    park_update_put: (req, res) => {
        const { _id } = req.params;
        const {parkName, parkAddress, helpText, userName, userEmail} = req.body;
        Park.findByIdAndUpdate(_id, {$set: {
            parkName: parkName,
            parkAddress: parkAddress, 
            helpText: helpText,
            userName: userName,
            userEmail: userEmail
        }}, {new: true}, error => {
            if(error) {
                return error;
            } else {
                res.redirect('/')
            }
        });
    },

    // this may belong in the park controller
    park_delete: (req, res) => {
        const {_id} = req.params;
        Park.deleteOne({_id: _id}, error => {
            if(error) {
                return error;
            } else {
                res.redirect('/')
            }
        })
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
    },

    // update/edit a single submission from a user
    volunteer_update_put: (req, res) => {
        const { _id } = req.params;
        const {parkName, parkAddress, volunteerDate, volunteerTime, userName, userEmail, moreVolunteers} = req.body;
        Volunteer.findByIdAndUpdate(_id, {$set: {
            parkName: parkName,
            parkAddress: parkAddress,
            volunteerDate: volunteerDate,
            volunteerTime: volunteerTime,
            userName: userName,
            userEmail: userEmail,
            moreVolunteers: moreVolunteers
        }}, {new: true}, error => {
            if(error) {
                return error;
            } else {
                res.redirect('/');
            }
        });
    },

    // delete a submission from a user
    volunteer_delete: (req, res) => {
        const {_id} = req.params;
        Volunteer.deleteOne({_id: _id}, error => {
            if(error) {
                return error;
            } else {
                res.redirect('/')
            }
        })
    },
}