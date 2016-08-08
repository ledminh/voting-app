var session = require('express-session');
var bodyParser = require('body-parser');


module.exports = function(app, express, passport) {

  //For passport
  app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: true }));
  app.use(passport.initialize());
  app.use(passport.session());

  //For submit POLL
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));

};
