var express = require('express');
var app = express();
var passport = require('passport');
var mongoose = require('mongoose');
var data = require('./data/data.js');

//App configure
require('./configure/configure.js')(app, express, passport, mongoose);

//Add routes
require('./routes/routes.js')(app, express, passport);

app.listen(9090);
console.log("The Voting App is running at port " + 9090);
