require('./pkg/db');
const express = require('express');
const bodyParser = require('body-parser');

const movies = require('./handlers/movies');

const api = express();
api.use(bodyParser.json());

api.get('/movies', movies.getAllMovies);
api.get('/movies/:id', movies.getOneMovies);
api.post('/movies', movies.createMovies);
api.put('/movies/:id', movies.updateMovies);
api.patch('/movies/:id', movies.updateMoviesPartial);
api.delete('/movies/:id', movies.deleteMovies);

api.listen(10000, err => {
  if(err) {
    return console.log('Could not start API', err);
  }
  console.log('Server successfully started on port 10000');
});
