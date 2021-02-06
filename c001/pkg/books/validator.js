const validator = require('node-input-validator');

const bookSchema = {
    title: 'required|minLength:2',
    year: 'required',
    author: 'required|minLength:2',
    page_count: 'required',
    genres: 'required'
};

const books = async (data, schema) => {
    let v = new validator.Validator(data, schema);
    let res = await v.check();
    if(!res) {
        throw v.errors;
    }
    return res;
};

module.exports = {
    bookSchema,
    books
}