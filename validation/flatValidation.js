const Joi = require('joi');

const validateFlat = (flat) =>{
    const schema = Joi.object({
        floor: Joi.string(),
        condition: Joi.string(),

    });

    return schema.validate(flat);
}

module.exports = { validateFlat } 