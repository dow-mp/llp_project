const siteData = require('../data/siteData');
const Park = require('../models/parkModel');
const Volunteer = require('../models/volunteerModel');

module.exports = {
    search_form: (req, res) => {
        res.render('pages/search', {
            copyrightYear: siteData.year
        })
    },
    locate_parks: (req, res) => {
        const { searchTerm } = req.params;
        console.log(searchTerm);
        Park.find({ parkZip: searchTerm}, (error, foundParks) => {
            if(error) {
                return error
            } else {
                res.render('/search', {
                    copyrightYear: siteData.year,
                    foundParks: foundParks
                });
            }
        })
    }
}

