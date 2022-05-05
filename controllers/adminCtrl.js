const siteData = require('../data/siteData');

module.exports = {
    admin: 
    // get all parks in need of help
    park_all: (req, res) => {
        // this callback fx will be retrieving data from the database to access stored form data submitted from the help page
    },

    // update/edit a single submission from a user
    park_update_put: (req, res) => {
        // this id variable may change depending on how ids are stored in mongodb - we will be querying the request for the id from mongo instead of UUID
        const { _id } = req.params;
        const {parkName, parkAddress, helpText, userName, userEmail} = req.body;
        // parkData is referring to an array of parks that presumably would have been stored in the data file here, however, this will eventually be querying the database to find a match
        const foundPark = parkData.find(park => park._id === String(_id));
        foundPark.parkName = parkName;
        foundPark.parkAddress = parkAddress;
        foundPark.helpText = helpText;
        foundPark.userName = userName;
        foundPark.userEmail = userEmail; 

        res.redirect("/admin-console");
    },

    // delete a submission from a user
    park_delete: (req, res) => {
        const {_id} = req.params;
        const foundPark = parkData.find(park => park._id === String(_id));
        const index = parkData.indexOf(foundPark);
        parkData.splice(index, 1);
        res.redirect('/admin-console')
    },

    // get all volunteer listings
    volunteer_all:,

    // update/edit a single submission from a user
    volunteer_update_put: (req, res) => {
        const { _id } = req.params;
        const {parkName, parkAddress, volunteerDate, volunteerTime, userName, userEmail, moreVolunteers} = req.body;
        // parkData is referring to an array of parks that presumably would have been stored in the data file here, however, this will eventually be querying the database to find a match
        const foundPark = parkData.find(park => park._id === String(_id));
        foundPark.parkName = parkName;
        foundPark.parkAddress = parkAddress;
        foundPark.volunteerDate = volunteerDate;
        foundPark.volunteerTime = volunteerTime;
        foundPark.userName = userName;
        foundPark.userEmail = userEmail; 
        foundPark.moreVolunteers = moreVolunteers;

        res.redirect("/admin-console");
    },

    // delete a submission from a user
    volunteer_delete: (req, res) => {
        const {_id} = req.params;
        const foundPark = parkData.find(park => park._id === String(_id));
        const index = parkData.indexOf(foundPark);
        parkData.splice(index, 1);
        res.redirect('/admin-console')
    },
}