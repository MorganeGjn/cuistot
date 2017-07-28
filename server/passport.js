const passport = require("passport");
LocalStrategy = require("passport-local").Strategy;
FacebookStrategy = require("passport-facebook").Strategy;
var User = require("./models").UserAccount;
var config = require("./config.js");
const { compareSync, genSaltSync } = require("bcryptjs");
const genSalt = require("./salt");
var Login = require("./models").UserLogin;
let salt = genSaltSync(10);

function addJWT(user) {
  const token = jwt.sign({ token: user.user_id }, "token");
  return Object.assign({}, user.toJSON(), { token });
}

passport.use(
  new LocalStrategy(
    {
      // set the field name here
      usernameField: "email",
      passwordField: "password"
    },
    function(email, password, done) {
      User.findOne({
        where: { email: email }
      })
        .then(User => {
          if (!User) {
            return done(null, false, { message: "Incorrect username." });
          }
          password_valid = compareSync(password, User.password_hash);
          if (password_valid == false) {
            return done(null, false, { message: "Incorrect password." });
          }
          return done(null, User, { message: "Ok." });
        })
        .catch(err => console.log(err));
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: "1363955133711501",
      clientSecret: "1617efa50804e87a3a1272d483077925",
      callbackURL: "http://localhost:3000/facebook/callback",
      passReqToCallback: true,
      profileFields: ["id", "email", "displayName"]
    },
    function(req, accessToken, refreshToken, profile, done) {
      User.findOne({ where: { email: profile._json.email } })
        .then(Response => {
          if (!Response) {
            User.create({ email: profile._json.email }).then(() => {
              User.findOne({
                where: { email: profile._json.email }
              }).then(User => {
                return done(null, User, { message: "Ok." });
              });
            });
          } else {
            return done(null, Response, { message: "Ok." });
          }
        })
        .catch(err => console.log(err));
    }
  )
);
