const siteData = require('../data/siteData');

module.exports = {
    index: (req, res) => {
        res.render('pages/index', {
            copyrightYear: siteData.year 
        });
    },
    about: (req, res) => {
        res.render('pages/about', {
        copyrightYear: siteData.year
        });
    },
    success: (req, res) => {
        res.render('pages/success', {
            copyrightYear: siteData.year
        });
    },
    search: (req, res) => {
        res.render('pages/search', {
            copyrightYear: siteData.year
        });
    },
    thanks: (req, res) => {
        res.render('pages/thanks', {
            copyrightYear: siteData.year
        });
    }, 
    login: (req, res) => {
        res.render('pages/login', {
            copyrightYear: siteData.year
        });
    }
}