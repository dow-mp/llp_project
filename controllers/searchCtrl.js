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
        console.log(req.body);
        if(!req.body) {
            res.render('pages/search', {
                copyrightYear: siteData.year
            });
        } else {
        const { searchTerm } = req.body;
        console.log(req.body);
        console.log(searchTerm);
        // if (Number(searchTerm)) {
            Park.find({$or: [ 
                {parkZip: searchTerm}, 
                {parkState: { '$regex': searchTerm, '$options': 'i' }}, 
                {parkCity: { '$regex': searchTerm, '$options': 'i' }}
            ]},  (error, foundParks) => {
                if(error) {
                    return error;
                } else {
                    res.render('pages/searchResults', {
                        copyrightYear: siteData.year,
                        searchResults: foundParks
                    });
                }
            })
        };
    }
}
