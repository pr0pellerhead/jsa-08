const { Validator } = require('node-input-validator');

const userSchema = {
    first_name: 'required|minLength:3',
    last_name: 'required|minLength:4'
};

const validate = async (data, schema) => {
    let v = new Validator(data, schema);
    let e = await v.check();
    if(!e) {
        throw v.errors;
    }
};

module.exports = {
    userSchema,
    validate
};