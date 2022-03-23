import express from "express";
import cookieSession from "cookie-session";
import passport from "passport";
import cors from "cors";

const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: ["test"],
    maxAge: 24 * 60 * 60 * 100, // 1 day
    // maxAge: 60 * 1000 * 30, // 30 minutes of inactivity
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: process.env.ORIGIN_URL || "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true, // accept incoming  cookies
  })
);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`http://localhost:${port}`));