const express = require('express');
const rickAndMorty = require('./handlers/rickAndMorty');

const api = express();

api.get('/api/v1/rickAndMorty/character/:id', rickAndMorty.getSingleCharacters);

api.listen(10000, err => {
    if(err) {
        return console.log(err);
    }
    console.log('Service started on port 10000');
})