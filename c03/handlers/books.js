const bookData = require('../pkg/books');

const getAllBooks = async (req, res) => {
    try {
        let data = await bookData.getAll();
        res.status(200).send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal server error');
    }
};

const getOneBook = async (req, res) => {
    try {
        let data = await bookData.getOne(req.params.id);
        if(data === null) {
            return res.status(404).send('Not Found');
        }
        res.status(200).send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal server error');
    }
};

const createBook = async (req, res) => {
    try {
        await bookData.create(req.body);
        res.status(201).send(req.body);
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal server error');
    }
};

const updateBook = async (req, res) => {
    try {
        await bookData.update(req.params.id, req.body);
        res.status(204).send(req.body);
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal server error');
    }
};

const updateBookPartial = async (req, res) => {
    try {
        await bookData.updatePartial(req.params.id, req.body);
        res.status(204).send(req.body);
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal server error');
    }
};

const deleteBook = async (req, res) => {
    try {
        await bookData.remove(req.params.id);
        res.status(204).send(req.body);
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal server error');
    }
};

module.exports = {
getAllBooks,
getOneBook,
createBook,
updateBook,
updateBookPartial,
deleteBook
};