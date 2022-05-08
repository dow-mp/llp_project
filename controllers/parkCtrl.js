const siteData = require('../data/siteData');
const Park = require('../models/parkModel');

module.exports = {
    park_form: (req, res) => {
        res.render('pages/park', {
            copyrightYear: siteData.year
        });
    },

    createPark: (req, res) => {
        const {parkName, parkAddress, helpText, userName, userEmail} = req.body;
        const newPark = new Park({
            parkName: parkName, 
            parkAddress: parkAddress,
            helpText: helpText,
            userName: userName,
            userEmail: userEmail
        });

        newPark.save();

        res.redirect('/thanks')
    }
}