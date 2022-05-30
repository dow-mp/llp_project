const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
    },
    password: {
        type:String,
    },
    googleId: {
        type: String,
    }
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = mongoose.model('User', userSchema);

passport.use(User.createStrategy());
passport.serializeUser((user, cb) => {
    process.nextTick(() => {
        cb(null, { id: user.id, username: user.username, name: user.displayName });
    });
});

passport.deserializeUser((user, cb) => {
    process.nextTick(() => {
        return cb(null, user);
    });
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'https://www.lovelocalparks.org/auth/google/admin'
},
function(accessToken, refreshToken, email, cb) {
    User.findOrCreate({ googleId: email.id }, function (err, user) {
        return cb(err, user);
    });
}
));

module.exports = User;