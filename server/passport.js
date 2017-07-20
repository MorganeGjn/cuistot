const passport = require('passport');
LocalStrategy = require('passport-local').Strategy;
FacebookStrategy = require('passport-facebook').Strategy;
var User = require('./models').UserAccount;


passport.use(new LocalStrategy({
    // set the field name here
    usernameField: "email",
    passwordField: "password"
  },
  function(email, password, done) {
    console.log(email, password);
    User.findOne({ where : { email: email, password_hash: password }}).then(User => {
        if (!User) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        return done(null, User, { message : 'Ok.' });
      });
  }
  ));
