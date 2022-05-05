const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/lovelocalparks', {useNewUrlParser: true, useUnifiedTopology: true}, (err)=> {
    if(!err) {
        console.log("Successful connection with MongoDB server");
    } else {
        console.log("Error with MongoDB's connectivity");
    }
});