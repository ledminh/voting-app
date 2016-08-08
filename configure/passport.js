var FBStrategy = require('passport-facebook').Strategy;
var facebookAuth = require('../auth/facebook');
var data = require('../data/data.js');

var verifyFunction = function(token, refreshToken, profile, done) {
  process.nextTick(() => {
    data.user.findOne({facebook_id: profile.id}, (err, user) => {
      if(err)
        return done(err);

      if(!user){
        var newUser = new data.user({
          username: profile.displayName,
          photo: profile.photos ? profile.photos[0].value : '/imgs/unknown-user.png',
          facebook_id: profile.id
        });

        newUser.save();

        return done(null, newUser);
      }

      return done(null,user);

    });
  });
};

var thisFBStrategy = new FBStrategy({
    clientID      : facebookAuth.clientID,
    clientSecret  : facebookAuth.clientSecret,
    callbackURL   : facebookAuth.callbackURL,
    profileFields : ['id', 'displayName', 'email', 'picture.type(large)']
}, verifyFunction);


module.exports = function(passport){

  //SERIALIZE AND DESERIALIZE USER IN AND OUT OF SESSION
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser((_id, done) => {
    done(null, _id);
  });

  passport.use(thisFBStrategy);

}
