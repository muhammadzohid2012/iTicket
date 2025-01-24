const Joi = require('joi');

const validateGender = (gender) =>{
    const schema = Joi.object({
        name: Joi.string(),
    });

    return schema.validate(gender);
}

module.exports = { validateGender } 