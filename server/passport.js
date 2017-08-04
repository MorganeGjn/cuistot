const passport = require("passport");
LocalStrategy = require("passport-local").Strategy;
FacebookStrategy = require("passport-facebook").Strategy;
const uuidV1 = require("uuid/v1");
var User = require("./models").UserAccount;
var config = require("./config.js");
const { compareSync, genSaltSync } = require("bcryptjs");
const genSalt = require("./salt");
var Gourmet = require("./models").Gourmet;

let salt = genSaltSync(10);

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
      clientID: config.facebook_api_key,
      clientSecret: config.facebook_api_secret,
      callbackURL: config.callback_url,
      passReqToCallback: true,
      profileFields: ["id", "email", "displayName"]
    },
    function(req, accessToken, refreshToken, profile, done) {
      User.findOne({ where: { email: profile._json.email } })
        .then(Response => {
          if (!Response) {
            const id = uuidV1();
            User.create({
              user_id: id,
              email: profile._json.email
            }).then(() => {
              Gourmet.create({ gourmet_id: id });
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
