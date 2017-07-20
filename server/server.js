const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');

const config = require('./config');
const ctl = require('./controller');

const app = module.exports = express();
const port = config.port || 3000;
const connectionString = config.connectionString;
massive( connectionString ).then(dbInstance => {app.set('db', dbInstance)});

app.use(bodyParser.json());
app.use(cors());

app.get('/api/getblogposts', ctl.getBlogPosts)
app.get('/api/getblogpost/:postid', ctl.getBlogPost)



app.listen(port, console.log(`Listening on port ${port}.`))