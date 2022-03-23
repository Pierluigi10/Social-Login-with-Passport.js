const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const GithubStrategy = require("passport-github2").Strategy;
// const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

// const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
// const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const GOOGLE_CLIENT_ID =
  "620948409363-ec9gubg5kt40rh12vhgtl3etiesscat2.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
