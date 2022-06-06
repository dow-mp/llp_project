const siteData = require('../data/siteData');
const Volunteer = require('../models/volunteerModel');

module.exports = {
    volunteer_form: (req, res) => {
        res.render('pages/volunteer', {
            copyrightYear: siteData.year
        });
    },

    volunteer_detail: (req, res) => {
        if(req.isAuthenticated()) {
            const {_id} = req.params;
            Volunteer.findOne({_id: _id}, (error, foundVolunteer) => {
                if(error) {
                    return error
                } else {
                    res.render('/pages/volunteerUpdate', {
                        copyrightYear: siteData.year,
                        foundVolunteer: foundVolunteer
                    });
                }
            });
        }
    },

    createVolunteer: (req, res) => {
        const { parkName, parkStreet, parkCity, parkState, parkZip, volunteerDate, volunteerTime, userName, userEmail, moreVolunteers } = req.body;
        const newVolunteer = new Volunteer({
            parkName: parkName,
            parkStreet: parkStreet,
            parkCity: parkCity, 
            parkState: parkState,
            parkZip: parkZip,
            volunteerDate: volunteerDate,
            volunteerTime: volunteerTime,
            userName: userName,
            userEmail: userEmail,
            moreVolunteers: moreVolunteers ? true : false
        });

        newVolunteer.save();

        res.redirect('/thanks')
    },

    // update/edit a single submission from a user
    volunteer_update_put: (req, res) => {
        if(req.isAuthenticated()) {
            const { _id } = req.params;
            const {parkName, parkStreet, parkCity, parkState, parkZip, volunteerDate, volunteerTime, userName, userEmail, moreVolunteers} = req.body;
            Volunteer.findByIdAndUpdate(_id, {$set: {
                parkName: parkName,
                parkStreet: parkStreet,
                parkCity: parkCity,
                parkState: parkState,
                parkZip: parkZip,
                volunteerDate: volunteerDate.toDateString(),
                volunteerTime: volunteerTime.toLocaleTimeString('en-US'),
                userName: userName,
                userEmail: userEmail,
                moreVolunteers: moreVolunteers ? true : false
            }}, {new: true}, error => {
                if(error) {
                    return error;
                } else {
                    res.redirect('/admin/volunteers');
                }
            });
        }
    },

    // delete a submission from a user
    volunteer_delete: (req, res) => {
        if(req.isAuthenticated()) {
            const {_id} = req.params;
            Volunteer.deleteOne({_id: _id}, error => {
                if(error) {
                    return error;
                } else {
                    res.redirect('/admin/volunteers')
                }
            });
        }
    }
}