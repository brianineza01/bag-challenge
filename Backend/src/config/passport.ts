import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { localSignIn } from "../helpers/authHelper";

const passportConfig = () => {
  passport.use(
    new LocalStrategy(
      { usernameField: "email", passwordField: "password" },
      async (email, password, done) => localSignIn(email, password, done)
    )
  );
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((obj, done) => {
    done(null, obj);
  });
};

export default passportConfig;
