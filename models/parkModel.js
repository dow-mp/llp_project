const mongoose = require('mongoose');
const {Schema} = mongoose;

const parkSchema = new Schema({
    parkName: {
        type: String,
        required: [true, 'Please enter a valid park name.'],
        minlength: [2, 'minimum length required is 2 characters']
    },
    parkStreet: {
        type: String,
        required: [true, 'Please enter the park\'s street.'],
        minlength: [2, 'minimum length required is 2 characters']
    },
    parkCity: {
        type: String,
        required: [true, 'Please enter the park\'s city.'],
        minlength: [2, 'minimum length required is 2 characters']
    },
    parkState: {
        type: String,
        required: [true, 'Please enter the park\'s state.'],
        minlength: [2, 'minimum length required is 2 characters'],
        maxlength: [2, 'maximum length accepted is 2 characters']
    },
    parkZip: {
        type: Number,
        required: [true, 'Please enter the park\'s zip code.'],
        minlength: [5, 'minimum length required is 5 characters'],
        maxlength: [5, 'maximum length required is 5 characters']
    },
    helpText: {
        type: String,
        required: [true, 'Please explain the problem.'],
        minlength: [5, 'minimum length required is 5 characters']
    },
    userName: {
        type: String
    },
    userEmail: {
        type: String
    }
});

const Park = mongoose.model('Park', parkSchema);

module.exports = Park;
