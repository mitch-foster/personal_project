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
app.use(bodyParser.urlencoded({extended: true}))
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
                dbInstance.getUser(profile._json.clientID).then((user)=>{
                    done(null, user)
                })
                // done(null, profile)
            }
        ))

});

passport.serializeUser((user, done) => {
    console.log('serialize', user);
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', 
{ successRedirect: 'http://localhost:3000/admin', failureRedirect: 'http://localhost:3000/login' }));
app.get('/auth/me', (req, res) => {
  if (req.user) return res.status(200).send(req.user);
  res.status(200).send('No user info')
})
app.get('/auth/logout', (req, res) => {
  req.logout();
  res.redirect('http://localhost:3000/login');
})

app.get('/api/getblogposts', ctl.getBlogPosts)
app.get('/api/getblogpost/:postid', ctl.getBlogPost)
app.post('/api/createblogpost', ctl.createBlogPost)

app.listen(port, console.log(`Listening on port ${port}.`))