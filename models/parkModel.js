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
        maxlength: [2, 'maximum length accepted is 2 characters']
    },
    parkZip: {
        type: Number,
        required: [true, "Please enter a street, city, and state."],
        minlength: [2, 'minimum length required is 2 characters']
    },
    helpText: {
        type: String,
        required: [true, "Please explain the problem."],
        minlength: [10, 'minimum length required is 10 characters']
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
