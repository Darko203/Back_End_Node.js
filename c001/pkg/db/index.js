const mongoose = require('mongoose');

const username = 'darkomi'; 
const password = 'Darkomil12345';
const host = 'cluster0.eance.mongodb.net';
const dbname = 'darkomi';

mongoose.connect(
    `mongodb+srv://${username}:${password}@${host}/${dbname}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    err => {
        if(err) {
            return console.log('Could not connect to DB', err);
        }
        console.log('Successfully connected to database');
    }
)