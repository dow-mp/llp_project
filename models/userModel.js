const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
// comment out all google oauth related code below, no access to google oauth needed at this time - only two admin users registered using username/password

// const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
// const findOrCreate = require('mongoose-findorcreate');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
    },
    password: {
        type:String,
    },
    // googleId: {
    //     type: String,
    // }
});

userSchema.plugin(passportLocalMongoose);
// userSchema.plugin(findOrCreate);

const User = mongoose.model('User', userSchema);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());

passport.deserializeUser(User.deserializeUser());

// passport.use(new GoogleStrategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: 'https://lovelocalparks.herokuapp.com/auth/google/admin'
// },
// function(accessToken, refreshToken, email, cb) {
//     User.findOrCreate({ googleId: email.id }, function (err, user) {
//         return cb(err, user);
//     });
// }
// ));

module.exports = User;