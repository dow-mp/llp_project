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
    },

    park_update_put: (req, res) => {
        const { _id } = req.params;
        const {parkName, parkAddress, helpText, userName, userEmail} = req.body;
        Park.findByIdAndUpdate(_id, {$set: {
            parkName: parkName,
            parkAddress: parkAddress, 
            helpText: helpText,
            userName: userName,
            userEmail: userEmail
        }}, {new: true}, error => {
            if(error) {
                return error;
            } else {
                res.redirect('/')
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
                res.redirect('/admin')
            }
        })
    }
}