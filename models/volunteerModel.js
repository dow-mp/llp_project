const mongoose = require('mongoose');
const {Schema} = mongoose;

const volunteerSchema = new Schema({
    parkName: {
        type: String,
        required: [true, 'Please enter a valid park name.'],
        minlength: [2, 'minimum length required is 2 characters']
    },
    parkStreet: {
        type: String,
        required: [true, "Please enter a street, city, and state."],
        minlength: [2, 'minimum length required is 2 characters']
    },
    parkCity: {
        type: String,
        required: [true, "Please enter a street, city, and state."],
        minlength: [2, 'minimum length required is 2 characters']
    },
    parkState: {
        type: String,
        required: [true, "Please enter a street, city, and state."],
        minlength: [2, 'minimum length required is 2 characters'],
        maxlength: [2, 'maximum length required is 2 characters']
    },
    parkZip: {
        type: String,
        required: [true, 'Please enter the park\'s zip code.'],
        minlength: [5, 'minimum length required is 5 characters'],
        maxlength: [5, 'maximum length required is 5 characters']
    },
    volunteerDate: {
        type: Date,
    },
    volunteerTime: {
        type: String,
    },
    userName: {
        type: String,
        required: [true, "Please enter your name."],
        minlength: [1, 'minimum length required is 1 character']
    },
    userEmail: {
        type: String,
        required: [true, "Please enter your email address."],
        minlength: [6, 'minimum length required is 5 characters']
    },
    moreVolunteers: {
        type: Boolean
    }
})

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

module.exports = Volunteer;