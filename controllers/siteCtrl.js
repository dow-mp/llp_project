const siteData = require('../data/siteData');

module.exports = {
    index: (req, res) => {
        ('pages/index', {
            copyrightYear: siteData.year 
        })
    },
    about: (req, res) => {
        ('pages/about', {
        copyrightYear: siteData.year
        })
    },
}