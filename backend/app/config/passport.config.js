const passportJWT = require("passport-jwt");
const strategyJWT = passportJWT.Strategy;
const extractJWT = passportJWT.ExtractJwt;

const userModel = require("../models/user.model");
const secretKey = require("../config/mongo.config").secret;

const options = {};
options.jwtFromRequest = extractJWT.fromAuthHeaderAsBearerToken();
options.secretOrKey = secretKey;


module.exports = (passport) => {
  //all privilages
  passport.use(
    "needAuthentication",
    new strategyJWT(options, (payloadJWt, done) => {
      userModel
        .findById(payloadJWt._id)
        .then((user) => {
          if (!user) {
            return done(null, false);
          } else {
            done(null, user);
          }
        })
        .catch((err) => {
          return done(null, false, {
            error: err,
          });
        });
    })
  );

  //Admin privileges

  passport.use(
    "adminPriveleges",
    new strategyJWT(options, (payloadJWt, done) => {
      userModel
        .findById(payloadJWt._id)
        .then((user) => {
          if (!user) return done(null, false);
          if (user.role_user != 1) return done(null, false);
          return done(null, user);
        })
        .catch((err) => {
          return done(null, false, {
            error: err,
          });
        });
    })
  );
};

