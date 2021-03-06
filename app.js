const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
// const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

const app = express();

mongoose.connect(config.database);

// Connect to DB and handle errors
mongoose.connection.on('connected', () => {
    console.log('Connected to database '+config.database);
});
mongoose.connection.on('error', (err) => {
    console.log('database error '+err);
});

app.use(helmet());

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Port for heroku
const port = process.env.PORT || 8080;

// CORS Middleware
app.use(cors());

// Set Startic Folder
app.use(express.static(path.join(__dirname, 'public')));

// // Pasport's Middleware
// app.use(passport.initialize());
// app.use(passport.session());

// require('./config/passport')(passport);

const client_inquiries = require('./routes/client_inquiries');
app.use('/api', client_inquiries);

// Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

// Any other route redirect to the index page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

// Start Server
app.listen(port, () => {
    console.log('server started on port '+port);
});

module.exports = app
