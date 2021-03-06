require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const methodOverride = require('method-override');
const path = require('path');
const app = express();
const routes = require('./routes/indexRoutes')
const PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');

app.use(express.static( path.join(__dirname, 'public') ));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(morgan('dev'));

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

require('./config/connection');

app.listen(PORT, () => {
    console.log(`The server is listening at port ${PORT}.`)
});

