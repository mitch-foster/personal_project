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

app.use(bodyParser.json());
app.use(cors());
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: config.sessionSecret,
}));
app.use(passport.initialize());
app.use(passport.session());

massive( connectionString ).then(dbInstance => {
        app.set('db', dbInstance);

        dbInstance.set_schema()
            .then( () => console.log('Tables have been reset'))
            .catch( err => console.log(err));

        passport.use( new Auth0Strategy({
                domain: config.auth0.domain,
                clientID: config.auth0.clientID,
                clientSecret: config.auth0.clientSecret,
                callbackURL: config.auth0.callbackURL
            },
            (accessToken, refreshToken, extraParams, profile, done) => {
                console.log("PROFILE",profile._json.clientID);

                dbInstance.getUser(profile._json.clientID).then( (user) => {
                    if (user[0]){
                        console.log('USER FOUND', user);
                        done(null, user)
                    } else {
                        console.log("NOT FOUND");
                        // dbInstance.createUser([profile.name.givenName, profile.name.familyName, profile._json.nickname, profile._json.email, profile._json.clientID])
                        // .then((user)=> {
                        //     console.log('CREATED USER', user[0]);
                        //     done(null, user[0])
                        // })
                    }
                })
            
                // done(null, profile)
            }
        ))

});

passport.serializeUser(function(user, done) {
  console.log('serialize', user);
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  console.log('deserialize', user);
  done(null, user);
});

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', 
{ successRedirect: 'http://localhost:3000/admin', failureRedirect: 'http://localhost:3000/login' }));

app.get('/api/getblogposts', ctl.getBlogPosts)
app.get('/api/getblogpost/:postid', ctl.getBlogPost)

app.listen(port, console.log(`Listening on port ${port}.`))