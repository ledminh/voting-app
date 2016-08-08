var configure_passport = require('./passport.js');
var configure_middleware = require('./middleware.js');
var configure_mongoose = require('./mongoose.js');

module.exports = function(app, express, passport, mongoose){
  //CONFIGURE PASSPORT
  configure_passport(passport);

  //SET VIEW ENGINE
  app.set('view engine', 'ejs');

  //CONFIGURE MIDDLEWARE
  configure_middleware(app,express,passport);

  //connect to database
  configure_mongoose(mongoose);

}
