const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');

const config = require('./config');

const app = module.exports = express();
const port = config.port || 3000;

app.use(bodyParser.json());

app.listen(port, console.log(`Listening on port ${port}.`))


