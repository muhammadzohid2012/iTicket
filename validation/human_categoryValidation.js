const Joi = require('joi');

const validateHuman = (human) =>{
    const schema = Joi.object({
        name: Joi.string(),
        Start_age: Joi.number(),
        Finish_age: Joi.number(),
        gender_id: Joi.number(),
    });

    return schema.validate(human);
}

module.exports = { validateHuman } 