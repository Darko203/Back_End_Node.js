const validator = require('node-input-validator');


const createAccountSchema = {
    email: 'required|email',
    password: 'required',
    password2: 'required'
};

const createLoginSchema = {
    email: 'required|email',
    password: 'required'
};

const users = async (data, schema) => {
    let v = new validator.Validator(data, schema);
    let res = await v.check();
    if(!res) {
        throw v.errors;
    }
    return res;
};

module.exports = {
    createAccountSchema,
    createLoginSchema,
    users
}