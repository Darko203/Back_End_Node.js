require('./pkg/db');
const express = require('express');
const bodyParser = require('body-parser');

const books = require('./handlers/books');
const auth = require('./handlers/auth');
const cfg = require('./pkg/config');
const jwt = require('express-jwt');


const api = express();
api.use(bodyParser.json());
api.use(jwt({ 
    secret: cfg.get('server').jwt_key,
    algorithms: ['HS256']
}).unless({
    path: [
        '/auth/create-account',
        '/auth/login'
    ]
}));

api.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Bad Token');
  }
});


api.post('/auth/create-account', auth.createAccount);
api.post('/auth/login', auth.login);
api.get('/auth/refresh-token', auth.refreshToken);

api.get('/books', books.getAllBooks);
api.get('books/:id', books.getOneBook);
api.post('/books', books.createBook);
api.put('/books/:id', books.updateBook);
api.patch('/books/:id', books.updateBookPartial);
api.delete('/books:id', books.deleteBook);



api.listen(cfg.get('server').port, err => {
    if(err) {
        return console.log('Could not start API', err);
    }
    console.log('Server successfully started on port 11000');
});