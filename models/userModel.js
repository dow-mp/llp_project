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

module.exports = User;