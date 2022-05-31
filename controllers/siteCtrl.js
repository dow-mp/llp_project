const User = require('../models/userModel');
const siteData = require('../data/siteData');
const passport = require('passport');

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
    thanks: (req, res) => {
        res.render('pages/thanks', {
            copyrightYear: siteData.year
        });
    }, 
    register_get: (req, res) => {
        res.render('pages/register', {
            copyrightYear: siteData.year
        });
    },
    register_post: (req, res) => {
        const {username, password} = req.body;
        console.log(req.body);
        User.register({username: username}, password, (error, user) => {
            if(error) {
                console.log(error);
                res.redirect('/404')
            } else {
                passport.authenticate('local')(req, res, () => {
                    res.redirect('/admin')
                });
            }
        });
    },
    login_get: (req, res) => {
        res.render('pages/login', {
            copyrightYear: siteData.year
        });
    }, 
    login_post: (req, res) => {
        const { username, password } = req.body;
        const user = new User({
            username: username,
            password: password
        });

        req.login(user, (error) => {
            if(error) {
                console.log(error);
                res.redirect('/login');
            } else {
                passport.authenticate('local')(req, res, () => {
                    res.redirect('/admin');
                });
            }
        });
    },
    // google_get: passport.authenticate('google', {scope: ['openid', 'profile', 'email']}),
    // google_redirect_get: [
    //     passport.authenticate('google', {failureRedirect: '/login'}),
    //     function(req, res) {
    //         res.redirect('/admin');
    //     }
    // ],
    logout: (req, res) => {
        res.render('/logout', function(req, res){
            req.logout();
            res.redirect('/login');
          });

        // req.logout(function(err) {
        //     if (err) { return next(err); }
        //     res.redirect('/');
            
    },
    error: (req, res) => {
        res.render('pages/404', {
            copyrightYear: siteData.year
        });
    }
}