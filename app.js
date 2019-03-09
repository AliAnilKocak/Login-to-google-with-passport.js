const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const app = express();
const mongoose = require('mongoose');
const keys = require('./config/keys')


app.set('view engine', 'ejs');


mongoose.connect(keys.mongodb.dbURI, () => {
    console.log('connected');
});


app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('Port listening..');
});
