const siteData = require('../data/siteData');
const Volunteer = require('../models/volunteerModel');

module.exports = {
    volunteer_form: (req, res) => {
        res.render('/pages/volunteer', {
            copyrightYear: siteData.year
        });
    },

    createVolunteer: (req, res) => {
        const {parkName, parkAddress, volunteerDate, volunteerTime, userName, userEmail, moreVolunteers} = req.body;
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
    }
}