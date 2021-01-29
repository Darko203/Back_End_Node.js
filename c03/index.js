require('./pkg/db');
const express = require('express');
const bodyParser = require('body-parser');

const books = require('./handlers/books');
const beers = require('./handlers/beers');
const dogs = require('./handlers/dogs');


const api = express();
api.use(bodyParser.json());


api.get('/books', books.getAllBooks);
api.get('books/:id', books.getOneBook);
api.post('/books', books.createBook);
api.put('/books/:id', books.updateBook);
api.patch('/books/:id', books.updateBookPartial);
api.delete('/books:id', books.deleteBook);

api.get('/beers', beers.getAllBeers);
api.get('beers/:id', beers.getOneBeer);
api.post('/beers', beers.createBeer);
api.put('/beers/:id', beers.updateBeer);
api.patch('/beers/:id', beers.updateBeerPartial);
api.delete('/beers:id', beers.deleteBeer);

api.get('/dogs', dogs.getAllDogs);
api.get('/dogs:id', dogs.getOneDog);
api.post('/dogs', dogs.createDog);
api.put('/dogs:id', dogs.updateDog);
api.patch('/dogs:id', dogs.updateDogPartial);
api.delete('/dogs:id', dogs.deleteDog)



api.listen(11000, err => {
    if(err) {
        return console.log('Could not start API', err);
    }
    console.log('Server successfully started on port 11000');
});