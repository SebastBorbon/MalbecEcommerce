const jwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
// the passport strategy is used to create tokens
const init = () => {
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
    secretOrKey: "secret", // ToDo should be in enviroment var
  };
  passport.use(
    new jwtStrategy(opts, (decoded, done) => {
      console.log("decoded jwt", decoded);
      return done(null, user);
    })
  );
};

module.exports = init;
