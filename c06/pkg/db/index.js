const mongoose = require('mongoose');

let username = 'dev';
let password = 'dev123!';
let dbname = 'students';

let dsn = `mongodb+srv://${username}:${password}@cluster0.c3iyx.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(
    dsn,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    err => {
        if (err) {
            return console.log('Could not connect to database: ', err);
        }
        console.log('Successfully conneted to database');
    }
);