const siteData = require('../data/siteData');
const Volunteer = require('../models/volunteerModel');

module.exports = {
    volunteer_form: (req, res) => {
        res.render('pages/volunteer', {
            copyrightYear: siteData.year
        });
    },

    createVolunteer: (req, res) => {
        const {parkName, parkAddress, volunteerDate, volunteerTime, userName, userEmail, moreVolunteers} = req.body;
        // adding console logging to check entries 2' validatorError issue occuring in mongoose
        console.log(req.body);
        const newVolunteer = new Volunteer({
            parkName: parkName,
            parkAddress: parkAddress,
            volunteerDate: volunteerDate,
            volunteerTime: volunteerTime,
            userName: userName,
            userEmail: userEmail,
            moreVolunteers: moreVolunteers
        });

        newVolunteer.save();

        res.redirect('/thanks')
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
                res.redirect('/admin')
            }
        })
    }
}