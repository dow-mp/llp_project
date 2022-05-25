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
        const { searchTerm } = req.body;
        console.log(req.body);
        console.log(searchTerm);
        if (Number(searchTerm)) {
            Park.find({ parkZip: searchTerm}, (error, foundParks) => {
                if(error) {
                    return error;
                } else {
                    res.render('pages/search', {
                        copyrightYear: siteData.year,
                        searchResults: foundParks
                    });
                }
            })
        };
        if (searchTerm.length === 2) {
            Park.find({ parkState: searchTerm}, (error, foundParks) => {
                if(error) {
                    return error;
                } else {
                    res.render('pages/search', {
                        copyrightYear: siteData.year,
                        searchResults: foundParks
                    });
                }
            })
        };
        if (searchTerm.length > 2) {
            Park.find({ parkCity: searchTerm}, (error, foundParks) => {
                if(error) {
                    return error;
                } else {
                    res.render('pages/search', {
                        copyrightYear: siteData.year,
                        searchResults: foundParks
                    });
                }
            })
        }
    }
}
