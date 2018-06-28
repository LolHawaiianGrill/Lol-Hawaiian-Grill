require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const port = process.env.SERVER_PORT || 4000;

const app = express();

massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));

app.use(bodyParser.json());

app.listen(port);

app.get('/home', (req, res) => {
    let db = app.get('db')
})