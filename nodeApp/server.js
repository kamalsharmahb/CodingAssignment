// server.js

require('dotenv').config();
var express = require('express');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
const config = require('./config');
const cors = require('cors');
const cookieParser = require('cookie-parser');
var path = require('path');

// Imports routes for the ScanResult
var post = require('./routes/post');

var app = express();
const connection = connect();

var corsOption = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
    exposedHeaders: ['x-auth-token']
};

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/post', post);

app.get('/', (req, res) => {
    res.send('API Server is running');
});

connection
    .on('error', console.log)
    .on('disconnected', connect)
    .once('open', listen);

function listen() {
    if (app.get('env') === 'test') return;
    app.listen(config.port);
    console.log('Server listening on port ' + config.port);
}

function connect() {
    var options = { keepAlive: 1, useNewUrlParser: true, useUnifiedTopology: true };
    mongoose.connect(config.db, options);
    return mongoose.connection;
}
