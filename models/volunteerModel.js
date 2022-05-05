const mongoose = require('mongoose');
const {Schema} = mongoose;

const volunteerSchema = new Schema({
    parkName: {
        type: String,
        required: [true, 'Please enter a valid park name.'],
        minlength: [2, 'minimum length required is 2 characters']
    },
    parkAddress: {
        type: Mixed,
        required: [true, "Please enter a street, city, and state."],
        minlength: [2, 'minimum length required is 2 characters']
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
        minlength: [6, 'minimum length required is 6 characters']
    },
    moreVolunteers: {
        type: Boolean
    }
})

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

module.exports = Volunteer;