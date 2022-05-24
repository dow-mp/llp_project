const siteData = require('../data/siteData');
const Park = require('../models/parkModel');

module.exports = {
    park_form: (req, res) => {
        res.render('pages/park', {
            copyrightYear: siteData.year
        });
    },
    park_detail: (req, res) => {
        const {_id} = req.params;
        Park.findOne({_id: _id}, (error, foundPark) => {
            if(error) {
                return error
            } else {
                res.render('/pages/parkUpdate', {
                    copyrightYear: siteData.year,
                    foundPark: foundPark
                });
            }
        })
    },

    createPark: (req, res) => {
        const {parkName, parkStreet, parkCity, parkState, parkZip, helpText, userName, userEmail} = req.body;
        const newPark = new Park({
            parkName: parkName, 
            parkStreet: parkStreet,
            parkCity: parkCity,
            parkState: parkState,
            parkZip: parkZip,
            helpText: helpText,
            userName: userName,
            userEmail: userEmail
        });

        newPark.save();

        res.redirect('/thanks')
    },

    park_update_put: (req, res) => {
        const { _id } = req.params;
        const {parkName, parkStreet, parkCity, parkState, parkZip, helpText, userName, userEmail} = req.body;
        Park.findByIdAndUpdate(_id, {$set: {
            parkName: parkName,
            parkStreet: parkStreet,
            parkCity: parkCity,
            parkState: parkState,
            parkZip: parkZip,
            helpText: helpText,
            userName: userName,
            userEmail: userEmail
        }}, {new: true}, error => {
            if(error) {
                return error;
            } else {
                res.redirect('/admin/parks')
            }
        });
    },

    // this may belong in the park controller
    park_delete: (req, res) => {
        const {_id} = req.params;
        Park.deleteOne({_id: _id}, error => {
            if(error) {
                return error;
            } else {
                res.redirect('/admin/parks')
            }
        })
    }
}