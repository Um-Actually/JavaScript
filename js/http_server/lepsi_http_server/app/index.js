
const express = require('express');
const app = express();
const session = require('express-session');
require('dotenv').config();

app.set('view engine', 'ejs');

app.set('views', './app/views');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
}));

app.use(require('./routes/defaultRouter'));

module.exports = app;