const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const cors = require('cors');

const config = require('./config');
const ctl = require('./controller');

const app = module.exports = express();
const port = config.port || 3000;
const connectionString = config.connectionString;
massive( connectionString ).then(dbInstance => {app.set('db', dbInstance)});

app.use(bodyParser.json());
app.use(cors());
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: config.sessionSecret,
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use( new Auth0Strategy({
        domain: config.auth0.domain,
        clientID: config.auth0.clientID,
        clientSecret: config.auth0.clientSecret,
        callbackURL: config.auth0.callbackURL
    },
    (accessToken, refreshToken, extraParams, profile, done) => {
        done(null, profile)
    }
))

app.get('/auth', passport.authenticate('auth0'));

app.get('/api/getblogposts', ctl.getBlogPosts)
app.get('/api/getblogpost/:postid', ctl.getBlogPost)



app.listen(port, console.log(`Listening on port ${port}.`))